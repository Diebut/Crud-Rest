const { usuarios } = require('../db.json');

module.exports = {

    getUsuarios:(req, res) => {
        res.json({usuarios})  //usuarios: usuarios})
    },

    
    addUsuarios: (req, res) => {
        //const usuarios = req.body.nombre;
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

       usuarios.forEach((usuario, i) => {
            if (usuario.id === Number(id)) {
                usuario.nombre = nombre,
                usuario.correo = correo;
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
                usuarios.splice(i, 1);
            }
        });
        res.json({
            'success':true,
            'msg': 'eliminado'
       })

    }
};