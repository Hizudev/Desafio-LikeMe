import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export function Form({ addPost }) {
  const [titulo, setTitulo] = useState("");
  const [img, setImg] = useState("");
  const [descripcion, setDescripcion] = useState("");

  return (
    <Box
      width={"22em"}
      height={"30em"}
      padding={"0 1em"}
      sx={{ backgroundColor: "#DBDFEA" }}
      border={"1px solid grey"}
      borderRadius={"10px"}
      boxShadow={"1px 1px 1px grey"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
    >
      <Typography variant="h4">Agregar un post</Typography>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="h5">Titulo</Typography>
        {titulo.trim() === "" ? (
          <Typography variant="p" color={"red"}>
            Necesario
          </Typography>
        ) : titulo.trim().length >= 26 ? (
          <Typography variant="p" color={"red"}>
            Max. 25 Caracteres
          </Typography>
        ) : (
          <Typography variant="p" color={"green"}>
            Valido
          </Typography>
        )}
      </Box>
      <input
        type="text"
        name="title"
        onChange={(e) => setTitulo(e.target.value)}
      />
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="h5">URL de la imagen</Typography>
        {img.trim() === "" ? (
          <Typography variant="p" color={"red"}>
            Necesario
          </Typography>
        ) : img.trim().length >= 1001 ? (
          <Typography variant="p" color={"red"}>
            Max. 1000 Caracteres
          </Typography>
        ) : (
          <Typography variant="p" color={"green"}>
            Valido
          </Typography>
        )}
      </Box>
      <input
        type="text"
        name="imgURL"
        onChange={(e) => setImg(e.target.value)}
      />
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="h5">Descripcion</Typography>
        {descripcion.trim() === "" ? (
          <Typography variant="p" color={"red"}>
            Necesario
          </Typography>
        ) : descripcion.trim().length >= 256 ? (
          <Typography variant="p" color={"red"}>
            Max. 255 Caracteres
          </Typography>
        ) : (
          <Typography variant="p" color={"green"}>
            Valido
          </Typography>
        )}
      </Box>
      <textarea
        name="description"
        onChange={(e) => setDescripcion(e.target.value)}
      ></textarea>
      <Box display={"flex"} justifyContent={"center"}>
        {titulo.trim() === "" ||
        titulo.trim().length >= 26 ||
        img.trim() === "" ||
        img.trim().length >= 1001 ||
        descripcion.trim() === "" ||
        descripcion.trim().length >= 256 ? (
          <Button sx={{ margin: "1em 0" }} variant={"contained"} disabled>
            Agregar
          </Button>
        ) : (
          <Button
            sx={{ margin: "1em 0" }}
            variant={"contained"}
            onClick={() => {
              addPost(titulo, img, descripcion);
            }}
          >
            Agregar
          </Button>
        )}
      </Box>
    </Box>
  );
}
