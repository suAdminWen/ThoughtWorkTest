const loadAllItems = require("./datbase").loadAllItems;
const loadPromotions = require("./datbase").loadPromotions;

// function main() {
module.exports = function main() {
    const inputs = [
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
        'ITEM000005',
        'ITEM000005'
    ];
    printInventory(inputs);
};

// function printInventory(inputs){
module.exports.printInventory = function (inputs){

    var cart = [];
    inputs = formatInupt(inputs);
    cart = getCommodityAndCount(cart, inputs);  // { barcode: 'ITEM000001', count: 5 },{...}]
    cart = getAllGoodsInfor(cart);
    var promotionsGoodsCart = getPromotionsInfor(cart);
    var totalInfor = getTotalInfor(cart, promotionsGoodsCart);
    printf(totalInfor, cart, promotionsGoodsCart);

}


function formatInupt(inputs){
    /* 格式化输入，将输入中的带有“-”的条形码转换成相应的格式！ */
    let newInput = [];
    for(let codes of inputs){
        let splitString = codes.split("-");
        if(splitString[1] && !isNaN(splitString[1])){
            /* 这里应该添加一个异常类型判断和处理，暂时不处理 */
            for(var i = 0; i < splitString[1]; i++){
                newInput.push(splitString[0]);
            }
        }else{
            newInput.push(codes);
        }
    }
    return newInput;
}


function getCommodityAndCount(cart, inputs){
    /* 统计购买商品的个数，返回类型格式时
    [{"barcode": 商品编号1, "count": 数量},
    {"barcode": 商品编号2, "count": 数量}]
    */

    this.getExistsBarcode = function getExistsBarcode(barcode){
        for(let item of cart){
            if(item["barcode"] == barcode){
                return item;
            }
        }
        return null;
    };

    this.increaseCount = function increaseCount(item) {
        item["count"] += 1;
    }

    this.create = function create(barcode){
        cart.push({"barcode": barcode, "count": 1});
    }

    for(let barcode of inputs){
        let goodsBarcode = getExistsBarcode(barcode);
        if(goodsBarcode){
            increaseCount(goodsBarcode);
        }else {
            create(barcode);
        }
    }
    return cart;
}


function getAllGoodsInfor(cart){
    /* 获取本次结算的商品的所有信息，返回类型格式
    [
    { "barcode": 商品编号1, "count": 数量, "name": 商品名称, "unit": 单位,
    "price": 单价, "subtotal"：小计 },
    { "barcode": 商品编号2, "count": 数量, "name": 商品名称, "unit": 单位,
    "price": 单价, "subtotal"：小计}, {...}, ...
    ]
     */
    let newCart = [];
    let allItems = loadAllItems()
    for(let element of cart){
        let goods = [];
        for(let item of allItems){
            if(element["barcode"] == item["barcode"]){
                goods = item;
                goods["count"] = element["count"];
                let subtotal = element["count"] * item["price"]
                goods["subtotal"] = subtotal;
            }
        }
        newCart.push(goods);
    }
    return newCart;
}


function getPromotionsInfor(cart){
    let promotionsGoodsCart = []
    let promotionsCodes = loadPromotions()[0]["barcodes"]
    for(let element of cart){
        for(let item of promotionsCodes){
            if(item == element["barcode"] && element["count"] >= 2){
                promotionsGoodsCart.push({
                                        "barcode": element["barcode"],
                                        "name": element["name"],
                                        "count": 1,  // 这里的优惠数量是可以更该的
                                        "price": element["price"],
                                        "unit": element["unit"]})
            }
        }
    }
    return promotionsGoodsCart;
}


function getTotalInfor(cart, promotionsGoodsCart){
    let totalInfor = {};
    let total = 0.0;
    let promotions = 0;
    for(let element of cart){
        total += parseFloat(element["subtotal"]);
    }
    for(let element of promotionsGoodsCart){
        promotions += element["price"] * element["count"];
    }
    total -= promotions;
    totalInfor = {"total": total, "promotions": promotions};
    return totalInfor;
}


function printf(totalInfor, cart, promotionsGoodsCart){

    var expectText = '***<没钱赚商店>购物清单***\n'
    for(let element of cart){
        expectText += '名称：' + element["name"] + "，数量：" + element["count"] + element["unit"] + "，单价：" + element["price"].toFixed(2) + "(元)，小计：";
        let subtotal = element["subtotal"];
        for(let item of promotionsGoodsCart){
            if(element["barcode"] == item["barcode"]){
                subtotal -= parseFloat(item["price"]);
            }
        }
        subtotal = parseFloat(subtotal).toFixed(2);
        expectText += subtotal + "(元)\n";
    }
    expectText += "----------------------\n";
    expectText += '挥泪赠送商品：\n';
    for(let element of promotionsGoodsCart){
        expectText += "名称：" + element["name"] + "，数量：" + element["count"] + element["unit"] + "\n";
    }
    expectText += "----------------------\n";
    expectText += "总计：" + totalInfor["total"].toFixed(2) + "(元)\n";
    expectText += "节省：" + totalInfor["promotions"].toFixed(2) + "(元)\n";
    expectText += "**********************";

    console.log(expectText);
}
