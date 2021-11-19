const Post = require("../models/Post")
const Express = require("express")
const router = Express.Router()


router.post("/post", (req, res)=> {
    const {symptoms,testdate,selfisolation,medicalcenter,medicinestatus,issues,email} = req.body
            const post = new Post({
                symptoms,
                testdate,
                selfisolation,
                medicalcenter,
                medicinestatus,
                issues,
                email,
               
            })
            post.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( {post })
                }
            })
          
        })

module.exports = router        