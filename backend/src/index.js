/* 
    * Rota/Recurso
    * /
    * users
    * Aquilo que vem depois da barra no endereço
*/

/**
 * Métodos HTTP:
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviado na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Serve
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: tabler('users').select('*').where()
   */
 
  const express = require("express");
  const routes = require("./routes");
  const cors = require("cors");
  
  const app = express();
  
  app.use(express.json());
  app.use(cors());
  app.use(routes);
  
  app.listen(3333);

