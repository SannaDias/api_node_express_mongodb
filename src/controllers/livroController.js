import livro from "../models/livro.js";

class LivroController {

    static async listarLivros (req, res){
        try {
             const listaLivros = await livro.find({});
             res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`})
        }
    }

        static async listarLivroPorId (req, res){
        try {
            const id = req.params.id;
           const listaLivros = await livro.findById(id);
             res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - Falha na requisição do Livro`})
        }
    }
    

    static async cadastraLivro(req, res){
        try{
            const novoLivro = await livro.create(req.body);
             res.status(201).json({message: "Criado com sucesso", livro: novoLivro});
        } catch (erro){
            res.status(500).json({message:`${erro.message} - Falha ao cadastrar livro`})
        }
    }

       static async atualizarLivro (req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro Atualizado"});
        } catch (error) {
            res.status(500).json({message: `${erro.message} - Falha na requisição do Livro`})
        }
    }

    
    static async deletarLivro(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
             res.status(200).json({message: "Deletado com sucesso"});
        } catch (erro){
            res.status(500).json({message:`${erro.message} - Falha ao excluir livro`})
        }
    }

};


export default LivroController;