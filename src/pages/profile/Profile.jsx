import { Grid } from "@mui/material";
import { Card, Sidebar, Story } from "../../components";
import { getUserID } from "../../hooks/hooks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../store/builderFunctions";
import { PostContainer } from "./styles";

const Profile = () => {

  const userID = getUserID();
  
  const dispatch = useDispatch();

  const data = useSelector((state) => state.posts.userPosts);

  useEffect(() => {
    dispatch(getUserPosts(userID));
  }, []);



  return (
    <>
      <Grid
        container
        sx={{ height: "100vh", width: "100vw", overflow: "hidden" }}
      >
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={9}
          sx={{ height: "100%", width: "100%", overflowY: "scroll" }}
        >
          <Story />
          <PostContainer>
            {data?.posts?.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </PostContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
