import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "likeme",
  password: "root",
  port: 5432,
  allowExitOnIdle: true,
});

export const getPosts = async () => {
  return (await pool.query("select * from posts order by id")).rows;
};

export const deletePost = async (id) => {
  const query = "delete from posts where id = $1 returning *";
  return (await pool.query(query, [id])).rows[0];
};

export const createPost = async (titulo, img, descripcion) => {
  const query =
    "insert into posts(titulo, img, descripcion, likes) values ($1, $2, $3, 0) returning *";
  return (await pool.query(query, [titulo, img, descripcion])).rows[0];
};

export const getLike = async (id, likes) => {
  const query = "update posts set likes = $1 where id = $2 returning *";
  return (await pool.query(query, [likes, id])).rows[0];
};
