const main = require('../main/main');

describe('pos', function () {

    it("Returns the formatted input", () =>{
        let inputs = [
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

        let result = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003',
            'ITEM000003',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
        inputs = main.formatInput(inputs);
        expect(inputs).toEqual(result);
    });

    it("get Commodity And Count", () =>{
        let cart = [];
        let inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003',
            'ITEM000003',
            'ITEM000005',
            'ITEM000005'
        ];
        let result = [
            {barcode: 'ITEM000001', count: 4},
            {barcode: 'ITEM000003', count: 2},
            {barcode: 'ITEM000005', count: 3}
        ];

        cart = main.getCommodityAndCount(cart, inputs);
        expect(cart).toEqual(result);
    });

    it("return all goods when given barcode and count", () =>{
        let cart = [
            {barcode: 'ITEM000001', count: 5},
            {barcode: 'ITEM000003', count: 2},
            {barcode: 'ITEM000005', count: 3}
        ];

        let result = [
            {"barcode": 'ITEM000001', "count": 5, "name": "雪碧", "unit": "瓶", "price": 3.00, "subtotal": 15.00},
            {"barcode": 'ITEM000003', "count": 2, "name": "荔枝", "unit": "斤", "price": 15.00, "subtotal": 30.00},
            {"barcode": 'ITEM000005', "count": 3, "name": "方便面", "unit": "袋", "price": 4.50, "subtotal": 13.50}
        ];

        cart = main.getAllGoodsInfor(cart);
        expect(cart).toEqual(result);
    });

    it("get promotions information", () => {
        let cart = [
            {"barcode": 'ITEM000001', "count": 5, "name": "雪碧", "unit": "瓶", "price": 3.00, "subtotal": 15.00},
            {"barcode": 'ITEM000003', "count": 2, "name": "荔枝", "unit": "斤", "price": 15.00, "subtotal": 30.00},
            {"barcode": 'ITEM000005', "count": 3, "name": "方便面", "unit": "袋", "price": 4.50, "subtotal": 13.50}
        ];

        let result = [
            {"barcode": 'ITEM000001', "name": "雪碧", "count": 1, "price": 3.00, "unit": "瓶"},
            {"barcode": 'ITEM000005', "name": "方便面", "count": 1, "price": 4.50, "unit": "袋"},
        ];

        promotionsGoodsCart = main.getPromotionsInfor(cart);
        expect(promotionsGoodsCart).toEqual(result);

    });

    it("get total information", () =>{
        let cart = [
            {"barcode": 'ITEM000001', "count": 5, "name": "雪碧", "unit": "瓶", "price": 3.00, "subtotal": 15.00},
            {"barcode": 'ITEM000003', "count": 2, "name": "荔枝", "unit": "斤", "price": 15.00, "subtotal": 30.00},
            {"barcode": 'ITEM000005', "count": 3, "name": "方便面", "unit": "袋", "price": 4.50, "subtotal": 13.50}
        ];
        let promotionsGoodsCart = [
            {"barcode": 'ITEM000001', "name": "雪碧", "count": 1, "price": 3.00, "unit": "瓶"},
            {"barcode": 'ITEM000005', "name": "方便面", "count": 1, "price": 4.50, "unit": "袋"},
        ];

        const result = {"total": 51.00, "promotions": 7.50};

        totalInfor = main.getTotalInfor(cart, promotionsGoodsCart);
        expect(totalInfor).toEqual(result);
    });

    it("print when given cart and pormotins goods cart and total Informations", ()=>{
        let cart = [
            {"barcode": 'ITEM000001', "count": 5, "name": "雪碧", "unit": "瓶", "price": 3.00, "subtotal": 15.00},
            {"barcode": 'ITEM000003', "count": 2, "name": "荔枝", "unit": "斤", "price": 15.00, "subtotal": 30.00},
            {"barcode": 'ITEM000005', "count": 3, "name": "方便面", "unit": "袋", "price": 4.50, "subtotal": 13.50}
        ];
        let promotionsGoodsCart = [
            {"barcode": 'ITEM000001', "name": "雪碧", "count": 1, "price": 3.00, "unit": "瓶"},
            {"barcode": 'ITEM000005', "name": "方便面", "count": 1, "price": 4.50, "unit": "袋"},
        ];
        let totalInfor = {"total": 51.00, "promotions": 7.50};

        const result =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';
        spyOn(console, 'log');

        main.printf(totalInfor, cart, promotionsGoodsCart);

        expect(console.log).toHaveBeenCalledWith(result);
    });


    it('should print correct text', function () {

        let inputs = [
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

        spyOn(console, 'log');

        main.printInventory(inputs);

        const expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
