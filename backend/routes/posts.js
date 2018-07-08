const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");
const postController = require('../controllers/post');

router.post("", checkAuth, extractFile, postController.createPost);//CREATE
router.get("", postController.readPosts);//READ (ALL)
router.get("/:id", postController.readPost);//READ (ONE)
router.put("/:id", checkAuth, extractFile, postController.updatePost); //UPDATE
router.delete("/:id", checkAuth, postController.deletePost); //DELETE


module.exports = router;
