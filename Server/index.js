import express from "express";
import cors from "cors";
import { createPost, getPosts, deletePost, getLike } from "./database/main.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const result = await getPosts();
    return res.json({ ok: true, result });
  } catch (e) {
    console.log(e);
  }
});

app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  try {
    if (
      titulo.trim() === "" ||
      img.trim() === "" ||
      descripcion.trim() === ""
    ) {
      throw "Uno o mas campos esta en blanco";
    } else if (
      titulo.trim().length >= 26 ||
      img.trim().length >= 1001 ||
      descripcion.trim().length >= 256
    ) {
      throw "Uno o mas campos excede el limite de caracteres (Titulo: 25 max. Img: 1000 max. Descripcion: 255 max.)";
    }
    const added = await createPost(titulo, img, descripcion);
    return res.status(201).json({ ok: true, added });
  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deletePost(id);
    return res.status(200).json({ ok: true, deleted });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
});

app.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { likes } = req.body;
  try {
    const updated = await getLike(id, likes);
    return res.status(200).json({ ok: true, updated });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Funcionando en: http://localhost:" + PORT);
});
