import express, { request, response } from 'express';

import routes from './routes'; // importa as routas dentro do routes.


const app = express();

app.use(express.json());
app.use(routes); // adicionar as routas dentro do app

// get: buscar uma ou mais inforamções do back-end
// post: criar um nova inforamção no back-end
// put? atualizar uma informação existente no back-end
// delete: remove uma informação do back-end

// post http://localhost:3333/users = criar um usuário
// GET http://localhost:3333/users = Listar usuários
// Get Http://localhost:3333/users/5 = buscar o dados do usuário com id 5


// Request paramns: parâmetrs que vem na porpria rota qu identificam um recursos
// Query Paarams: Parâmetros que vem na propria rota geralmente opcionais para filtros, paginação
// Request Body: parãmetros para criação/ atualização informações


/*
const users = [
    'Diego',
    'Cleber',
    'Robson',
    'Daniel'
]
// busca um usuário
app.get('/',(request, response) => {
    return response.json({ message: 'Hello World'});
})  
    /*
    const search = String(request.query.search);  // request, pode ser um array, dessa forma, iremos força e enganar o typescript que será uma string
    // forçando sua conversão

    const filteredUsers = search ? users.filter(users => users.includes(search) ) : users;

    return response.json(filteredUsers);
})
/*
// : dois pontos significa que receberá um parâmetro
app.get('/users/:id', (request, response)=>{
    const id = Number(request.params.id); // o uso de id, é porque definimos em users/:id , o ID vem dali, se fosse outro nome, deverá ser outro nome em todo resto.
    const user = users[id];

    return response.json(user);
})
// um usuário
app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
         name: data.name,
         email: data.email   
    }

    // return tem a mesma ideia da linguagem C
    return response.json(user);
})
*/
app.listen(3333);