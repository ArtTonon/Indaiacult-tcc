import { Request, Response } from "express";
import Obra, { IObra } from "../../models/Obra";
import Artista from "../../models/Artista";

const createObra = async (req: Request, res: Response) => {
  try {
    const {
      titulo,
      descricao,
      genero,
      autor,
      qtdAvaliacoes,
      avaliacoes,
      data,
      imagem,
    } = req.body;

    if (!titulo || !imagem || !data || !descricao || !genero || !autor) {
      return res
        .status(400)
        .json({ message: "Por favor, forneça todos os campos necessários" });
    }

    // Verifica se artista._id está presente na requisição

    const novaObra: IObra = new Obra({
      titulo,
      descricao,
      genero,
      autor,
      qtdAvaliacoes,
      avaliacoes,
      data,
      imagem,
    });

    await novaObra.save(); // Adicionei o await aqui para aguardar a conclusão da operação de salvamento

    res.status(201).json({
      message: "Obra criada com sucesso.",
      obra: novaObra,
    });
  } catch (error) {
    console.error("Erro ao criar obra:", error);
    res.status(500).json({ message: "Ocorreu um erro ao criar a obra." });
  }
};

const getObra = async (req: Request, res: Response) => {
  const { obraId } = req.params;
  const obra = await Obra.findById(obraId, "nome data descricao autor");

  if (!obra) {
    return res.status(404).json({ message: "Obra não encontrada" });
  }

  res.status(200).json(obra);
};

const listObra = async (req: Request, res: Response) => {
  try {
    // Busca todas as obras com apenas os campos desejados
    const obras = await Obra.find(
      {},
      "titulo data descricao autor imagem genero"
    );

    // Mapeia cada obra para adicionar informações do autor
    const obrasComAutor = await Promise.all(
      obras.map(async (obra) => {
        // Inicializa autor como null
        let autor = null;

        // Verifica se a obra tem um autor associado
        if (obra.autor) {
          // Encontra o autor da obra na tabela de artistas
          autor = await Artista.findById(obra.autor);
        }

        // Retorna um objeto com as informações da obra e do autor
        return {
          _id: obra._id,
          nome: obra.titulo,
          data: obra.data,
          titulo: obra.titulo,
          descricao: obra.descricao,
          genero: obra.genero,
          autor: autor
            ? {
                // Verifica se autor é diferente de null antes de acessar suas propriedades
                _id: autor._id,
                nome: autor.nome,
                imagem: autor.imagem,
                // Adicione outros campos do autor conforme necessário
              }
            : null,
          imagem: obra.imagem,
        };
      })
    );

    res.status(200).json(obrasComAutor);
  } catch (error) {
    res.status(500).json("Ocorreu um erro na listagem de obras.");
  }
};

const deleteObra = async (req: Request, res: Response) => {
  const { obraId } = req.params;
  try {
    const obra = await Obra.findByIdAndDelete(obraId);

    if (!obra) {
      return res.status(404).json({ message: "Obra não encontrada" });
    }

    res.status(200).json({ message: "Obra deletada com sucesso" });
  } catch (Error) {
    res.status(500).json({
      message: "Ocorreu um erro enquanto se deleveta a Obra, tente novamente.",
    });
  }
};

const updateObra = async (req: Request, res: Response) => {
  const { obraId } = req.params;
  const { obra } = req.body;

  if (!obraId) {
    return res
      .status(404)
      .json({ message: "Não foi possivel encontrar a obra" });
  }

  try {
    await Obra.findByIdAndUpdate(obraId, obra);
    res.status(200).json({ message: "Obra atualizada com sucesso" });
  } catch (Error) {
    res.status(500).json({
      message: "Ocorreu um erro enquanto se atualizava a Obra",
    });
  }
};
export { createObra, listObra, getObra, deleteObra, updateObra };
