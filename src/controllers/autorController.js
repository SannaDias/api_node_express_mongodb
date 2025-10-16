import { autor } from "../models/Autor.js";


class AutorController {

    static async listarAutor (req, res){
        try {
             const listaAutor = await livro.find({});
             res.status(200).json(listaAutor);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`})
        }
    }

        static async listarAutorPorId (req, res){
        try {
            const id = req.params.id;
           const listaAutor = await livro.findById(id);
             res.status(200).json(listaAutor);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - Falha na requisição do Autor`})
        }
    }
    

    static async cadastraAutor(req, res){
        try{
            const novoAutor = await autor.create(req.body);
             res.status(201).json({message: "Criado com sucesso", autor: novoAutor});
        } catch (erro){
            res.status(500).json({message:`${erro.message} - Falha ao cadastrar autor`})
        }
    }

       static async atualizarAutor (req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor Atualizado"});
        } catch (error) {
            res.status(500).json({message: `${erro.message} - Falha na requisição do Autor`})
        }
    }

    
    static async deletarAutor(req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
             res.status(200).json({message: "Deletado com sucesso"});
        } catch (erro){
            res.status(500).json({message:`${erro.message} - Falha ao excluir Autor`})
        }
    }

};


export default AutorController;