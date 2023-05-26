import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";

export function PostCard({ postInfo, deletePost, getLike }) {
  return (
    <Box
      border={"1px solid grey"}
      borderRadius={"10px"}
      overflow={"hidden"}
      boxShadow={"1px 1px 1px grey"}
      width={316}
      height={430}
      sx={{ backgroundColor: "#DBDFEA" }}
    >
      <Box width={300} height={190}>
        <img src={postInfo.img} width={316} height={190} alt="user Img" />
      </Box>
      <Box
        px={1}
        height={230}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography
            variant="body1"
            fontWeight={"bold"}
            align="center"
            sx={{ padding: ".5em 0" }}
          >
            {postInfo.titulo}
          </Typography>
          <Typography
            variant="body2"
            align="justify"
            sx={{ overflowWrap: "break-word" }}
          >
            {postInfo.descripcion}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-around"}>
          <Box display={"flex"} alignItems={"center"}>
            <IconButton
              onClick={() => {
                getLike(postInfo.id, postInfo.likes);
              }}
            >
              <ThumbUpIcon color="primary" />
            </IconButton>
            <Typography variant="caption" px={1}>
              {postInfo.likes}
            </Typography>
          </Box>
          <IconButton
            onClick={() => {
              deletePost(postInfo.id);
            }}
          >
            <DeleteForeverIcon color={"error"} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
