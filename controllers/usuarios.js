const { usuarios } = require('../db.json');

module.exports = {

    getUsuarios:(req, res) => {
        res.json({usuarios})  //products: products})
    },

    
    addUsuarios: (req, res) => {
        //const products = req.body.name;
        const {nombre} = req.body;
        products.push({
            nombre, correo,
            id: products.length
        })
        res.json({
            'success':true,
            'msg': 'successfully added'
        });
    },

    updateUsuarios:(req, res)=>{
       const { id } = req.params;
       const { nombre } = req.body;
       const { correo } = req.body;

       usuarios.forEach((usuarios, i) => {
            if (usuarios.id === Number(id)) {
                usuarios.name = name;
            }

       });
       res.json({
            'success':true,
            'msg': 'update'
       })

    },

    deleteUsuarios:(req, res)=>{
        const {id} = req.params;
        usuarios.forEach((usuario, i)=>{
            if (usuario.id === Number(id)) {
                usuario.splice(i, 1);
            }
        });
        res.json({
            'success':true,
            'msg': 'delete'
       })

    }
};