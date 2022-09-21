//importando bibliotecas necessárias 
import express  from "express";
import dotenv from 'dotenv';
import mustache from "mustache-express";
// para criar biblioteca publica importando o path 
import path from "path";
// configurando as rotas no servidor 
import mainRoutes from './routes/index'



//configurando a porta 
dotenv.config();

//servidor 
const server = express();

//mustache_template-engine 
server.set('view engine','mustache');
//pastas de visualização do projeto 
server.set('views', path.join(__dirname,'views'));
server.engine('mustache', mustache());

//configurando pastas publicas__cofigurando pasta de arquivos estaticos 
server.use(express.static(path.join(__dirname, '../public')));

//rotas 
server.use(mainRoutes);

server.use((req, res)=>{
    res.render('pages/404');
});

//rodando servidor process.env.PORT
server.listen(process.env.PORT);
