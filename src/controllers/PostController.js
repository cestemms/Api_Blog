const mongoose = require ('mongoose');

const Post = mongoose.model('Post');

//Listagem com paginação
module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
        const posts = await Post.paginate({}, {page, limit:5});
        return res.json(posts);
    },

    //Criação
    async store(req, res){
        const post = await Post.create(req.body);

        return res.json(post);
    }, 

    //Visualização
    async show(req, res){
        const post = await Post.findById(req.params.id);

        return res.json(post);
    }, 

    //Edição
    async update(req, res){
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(post);
    }, 

        //Exclusão
        async destroy(req, res){
            const post = await Post.findByIdAndDelete(req.params.id);
    
            return res.send();
        }, 
};