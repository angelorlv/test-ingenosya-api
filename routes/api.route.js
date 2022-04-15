let router = require('express').Router()
let axios  = require('axios')


//Message de Vérification
router.get('/',(req,res)=>{
    res.send({message:"API 1.0 Fonctionnel"})
})

//Users
router.get('/users',async (req,res)=>{
    //Récupération des données via le serveur randomuser.me

    try {
        let u = 'https://randomuser.me/api/1.2/'
        const d = await axios.get(u,{params:{
            seed:req.query.seed,
            nat:req.query.country,
            results:req.query.count
        }})
        return res.status(200).json(d.data.results)

    } catch (e) {
        console.error(e)
        return res.status(500).json({message:'Erreur du Serveur'})
    }
})


//------
module.exports = router

//'https://randomuser.me/api/1.2/?seed=<seed>&nat=<country>&results=<count>'