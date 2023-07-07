const { usuarios } = require('../db.json');

module.exports = {

    getUsuarios:(req, res) => {
        res.json({usuarios})  //products: products})
    },

    
    addUsuarios: (req, res) => {
        //const products = req.body.name;
        const {nombre} = req.body;
        const {correo} = req.body;
        usuarios.push({
            nombre, correo,
            id: usuarios.length
        })
        res.json({
            'success':true,
            'msg': 'agregado :D'
        });
    },

    updateUsuarios:(req, res)=>{
       const { id } = req.params;
       const { nombre } = req.body;
       const { correo } = req.body;

       usuarios.forEach((usuarios, i) => {
            if (usuarios.id === Number(id)) {
                usuarios.name = nombre,
                usuarios.correo = correo;
            }

       });
       res.json({
            'success':true,
            'msg': 'modificado'
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
            'msg': 'eliminado'
       })

    }
};