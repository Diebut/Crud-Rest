const { usuarios } = require('../db.json');

module.exports = {

    getUsuarios:(req, res) => {
        res.json({usuarios})  //products: products})
    },

    
    addUsuarios: (req, res) => {
        //const products = req.body.name;
        const {name} = req.body;
        products.push({
            name,
            id: products.length
        })
        res.json({
            'success':true,
            'msg': 'successfully added'
        });
    },

    updateProducts:(req, res)=>{
       const { id } = req.params;
       const { name } = req.body;

       products.forEach((products, i) => {
            if (products.id === Number(id)) {
                products.name = name;
            }

       });
       res.json({
            'success':true,
            'msg': 'update'
       })

    },

    deleteProducts:(req, res)=>{
        const {id} = req.params;
        products.forEach((product, i)=>{
            if (product.id === Number(id)) {
                products.splice(i, 1);
            }
        });
        res.json({
            'success':true,
            'msg': 'delete'
       })

    }
};