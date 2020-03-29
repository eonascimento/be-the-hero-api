const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * GET: Buscar/listar uma informaçãfo do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parãmetros uitlizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySql, SQLite, PostgreSql, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

   /**
    * Driver: SELECT * FROm USERS
    * Query Builder: table('users).select('*').wherer()
    */




