var express = require('express');
var router = express.Router();
var Post = require('./models/post');

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
     
router.get('/posts', asyncMiddleware( async ( req, res, next ) => {
    res.json(await Post.find({}));
}));

router.get('/post/:id', asyncMiddleware( async ( req, res, next ) => {
    res.json( await Post.findById({ _id: req.query.id }) );
}));

router.post("/create", asyncMiddleware( async ( req, res, next ) => {
    let post = new Post({ title: req.body.title, excerpt:req.body.excerpt, body: req.body.body });
    res.json(await post.save());
}));
     
router.put('/update', asyncMiddleware( async ( req, res, next ) => {
    res.json(await Post.findOneAndUpdate({ _id: req.body.id }, { $set: { title: req.body.title, excerpt: req.body.excerpt, body: req.body.body } }, { new: true }));
}));

router.delete('/delete', asyncMiddleware( async ( req, res, next ) => {
    res.json(await Post.findOneAndDelete({ _id: req.query.id }));
}));

module.exports = router;