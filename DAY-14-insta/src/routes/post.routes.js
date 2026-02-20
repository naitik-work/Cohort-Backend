const express= require("express");
const multer= require("multer");
const upload= multer({ storage: multer.memoryStorage()})
const postRouter= express.Router();
const identifyUser= require('../middlewares/auth.middleware')
const postController= require("../controllers/post.controller")


//POST /api/posts [protected]
//- req.body = { caption,image-file }
postRouter.post('/',upload.single("image"),identifyUser,postController.createPostController)

//GET /api/posts/ [protected]
postRouter.get('/',identifyUser,postController.getPostController);

//GET /api/posts/details/:postId
//-> return an detail about specific post with the id. Also check whether the post 
//belongs to the user that the request come from.

postRouter.get('/details/:postId',identifyUser,postController.getPostDetailsController);
module.exports= postRouter