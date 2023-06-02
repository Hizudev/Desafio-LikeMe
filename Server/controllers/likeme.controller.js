import { likemeModel } from "../models/likeme.model.js";
import { handleErrors } from "../database/errors.js";

const allPosts = async (req, res) => {
  try {
    const result = await likemeModel.getPosts();
    return res.json({ ok: true, result });
  } catch (error) {
    return res.json({ ok: false, error });
  }
};

const addPost = async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  try {
    if (
      titulo.trim() === "" ||
      img.trim() === "" ||
      descripcion.trim() === ""
    ) {
      throw "400";
    } else if (
      titulo.trim().length >= 26 ||
      img.trim().length >= 1001 ||
      descripcion.trim().length >= 256
    ) {
      throw "413";
    }
    const added = await likemeModel.createPost(titulo, img, descripcion);
    return res.status(201).json({ ok: true, added });
  } catch (error) {
    const { status, message } = handleErrors(error);
    return res.status(status).json({ ok: false, message });
  }
};

const erasePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await likemeModel.deletePost(id);
    return res.status(200).json({ ok: true, deleted });
  } catch (error) {
    const { status, message } = handleErrors(error.code);
    return res.status(status).json({ ok: false, message });
  }
};

const likePost = async (req, res) => {
  const { id } = req.params;
  const { likes } = req.body;
  const posts = await likemeModel.getPosts();
  try {
    if (!posts.some((post) => post.id == id)) {
      throw "404";
    } else if (isNaN(likes)) {
      throw "405";
    }
    const updated = await likemeModel.getLike(id, likes);
    return res.status(200).json({ ok: true, updated });
  } catch (error) {
    const { status, message } = handleErrors(error);
    return res.status(status).json({ ok: false, message });
  }
};

export const likeMeController = {
  allPosts,
  addPost,
  erasePost,
  likePost,
};
