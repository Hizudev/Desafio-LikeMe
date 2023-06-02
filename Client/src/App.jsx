import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { PostGalery } from "./Components/Postsgalery";
import { Form } from "./Components/Form";

const httpUrl = "http://localhost:3000";
axios.defaults.baseURL = httpUrl;

export default function App() {
  const [posts, setPosts] = useState([]);
  const [galerySwitch, setGalerySwitch] = useState(false);

  const getPosts = async () => {
    const response = await axios.get("/api");
    setPosts(response.data.result);
    setGalerySwitch(true);
  };

  const addPost = async (titulo, img, descripcion) => {
    const newPost = { titulo, img, descripcion };
    await axios.post("/api/posts", newPost);
    getPosts();
  };

  const deletePost = async (id) => {
    await axios.delete(`/api/posts/${id}`);
    getPosts();
  };

  const getLike = async (id, likes) => {
    const i = { likes: likes + 1 };
    await axios.put(`/api/posts/${id}`, i);
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#8294C4" }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"1em 1em 3em 1em"}
      >
        <CameraAltIcon color="primary" fontSize="large" />
        <Typography
          color={"white"}
          align="center"
          variant="h2"
          sx={{ padding: "0 1em", textShadow: "1px 1px 1px #DBDFEA" }}
        >
          Like Me
        </Typography>
        <CameraAltIcon color="primary" fontSize="large" />
      </Box>

      <Grid container spacing={5} px={2}>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Form addPost={addPost} />
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <PostGalery
            posts={posts}
            deletePost={deletePost}
            getLike={getLike}
            galerySwitch={galerySwitch}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
