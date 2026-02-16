const express= require("express");
const multer= require("multer");
const upload= multer({ storage: multer.memoryStorage()})
const postRouter= express.Router();

const postController= require("../controllers/post.controller")
//POST /api/posts [protected]
//- req.body = { caption,image-file }

postRouter.post('/',upload.single("image"),postController.createPostController)

module.exports= postRouter