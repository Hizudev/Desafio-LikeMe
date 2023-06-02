import { pool } from "../database/likeme.connection.js";

const getPosts = async () => {
  return (await pool.query("select * from posts order by id")).rows;
};

const deletePost = async (id) => {
  const query = "delete from posts where id = $1 returning *";
  return (await pool.query(query, [id])).rows[0];
};

const createPost = async (titulo, img, descripcion) => {
  const query =
    "insert into posts(titulo, img, descripcion, likes) values ($1, $2, $3, 0) returning *";
  return (await pool.query(query, [titulo, img, descripcion])).rows[0];
};

const getLike = async (id, likes) => {
  const query = "update posts set likes = $1 where id = $2 returning *";
  return (await pool.query(query, [likes, id])).rows[0];
};

export const likemeModel = { getPosts, deletePost, createPost, getLike };
