import { Request, Response} from 'express';
import knex from '../database/connection';

class ItensController {
    async index(request: Request, response: Response){
        const itens = await knex('itens').select('*'); // === igual select * where blablalba
    
        // serialized, serialização, ele "transforma" para um formato melhor os arquivos que estão sendo requisitados
        const serializedItens = itens.map(item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.105:3333/uploads/${item.image}`, // Estou utilizando ip local
            };
        });
    
        return response.json(serializedItens);
    }
}

export default ItensController;