import { repositoryAnime } from "../repositories/animes.repository"
import { transferAnimeModel } from "../models/anime-tranfer-model";
import { StatusCode } from "../utils/status-code";

//onde ocorre o filtro
export const serviceFilterEp = async (animeName: string | undefined ):Promise<transferAnimeModel> => {
    
    //define a interface de retorno
    let responseFormat:transferAnimeModel = {
        statusCode: 0,
        body: []
    };

    //buscando dados
    const queryString = animeName?.split("?%3F=")[1] || "";
    const data = await repositoryAnime(queryString);

    //verifica se tem conteudo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormat.body = data

    
    return responseFormat;
}