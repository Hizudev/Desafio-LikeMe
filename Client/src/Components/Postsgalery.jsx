import { Box, CircularProgress, Grid } from "@mui/material";
import { PostCard } from "./PostCard";

export function PostGalery({ posts, deletePost, getLike, galerySwitch }) {
  return (
    <>
      {galerySwitch ? (
        <Box>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid
                width={"100vw"}
                height={470}
                item
                key={post.id}
                xs={12}
                md={6}
                lg={4}
                xl={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <PostCard
                  postInfo={post}
                  deletePost={deletePost}
                  getLike={getLike}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Box>
          <CircularProgress color="success" />
        </Box>
      )}
    </>
  );
}
