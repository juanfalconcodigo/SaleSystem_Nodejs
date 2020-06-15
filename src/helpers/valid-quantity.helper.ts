import { Product } from "../models";

const validQuantity = async (products: any[], callback: Function): Promise<void> => {
    let productsId: string[] = [];
    products.map((e) => {
        productsId.push(e.product);
    });
    let res: any[] = [];

    Product.find({}).where("_id").in(productsId).exec(async (err, data) => {
        for (let e of data) {
            let quantity = products.find(p => p.product == e._id).quantity;
            if (quantity <= e.quantity) {

                let quantityNew = e.quantity - quantity;
                const product = await Product.findByIdAndUpdate(e._id, { quantity: quantityNew })
                if (product) {
                    res.push({
                        product: e._id,
                        quantity
                    });
                }
            }
        }
        callback(res.length === 0 ? false : res);
    });

}

export default validQuantity;