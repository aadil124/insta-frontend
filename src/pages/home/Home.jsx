import { Grid } from "@mui/material";
import { Sidebar, Story } from "../../components";
import { Container } from "./styles";

const Home = () => {
  return (
    <>
      <Container>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={3} sx={{ height: "100%" }}>
            <Sidebar />
          </Grid>
          <Grid item xs={9} sx={{ height: "100%", overflowY: "scroll" }}>
            <Story />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
