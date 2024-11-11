import fs from 'fs';
import path from 'path';
import { Anime } from '../models/anime-model';




//lendo dados e tradando casos
const pathData = path.join(__dirname,'../repositories/animes.json');

export const repositoryAnime = async (animeName?:string): Promise<Anime[]> => {
    const language ="utf-8"

    const rawData = fs.readFileSync(pathData,language);
    let jsonFile = JSON.parse(rawData);

    if(animeName){
        jsonFile = jsonFile.filter((anime:Anime) => anime.animeName === animeName)
    }

    return jsonFile;
}
