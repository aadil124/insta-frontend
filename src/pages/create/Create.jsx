import { Button, Grid, TextField } from "@mui/material";
import { Container, StyledPaper } from "./styles";
import { useState } from "react";
import FileBase from "react-file-base64";
import { uploadPost } from "../../services/api";
import { getUserID, getuserName } from "../../hooks/hooks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/index";

const Create = () => {
  const userID = getUserID();
  const username = getuserName();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    img: "",
    caption: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handlePost = async () => {
    const { data } = await uploadPost({
      userID,
      img: formValues.img,
      caption: formValues.caption,
      name: username,
    });

    if (data) {
      if (data.success) {
        toast.success(data.success);
        navigate("/home");
      } else {
        toast.error(data.error);
      }
    }
  };

  return (
    <>
      <Grid
        container
        sx={{ height: "100vh", width: "100vw", "& > div": { height: "100%" } }}
      >
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Container>
            <StyledPaper>
              <h3>Create Post</h3>
              {formValues?.img !== "" && <img src={formValues.img} alt="img" />}
              <TextField
                label="Caption"
                onChange={handleChange}
                name="caption"
              />
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setFormValues({ ...formValues, img: base64 })
                }
              />
              <Button variant="contained" onClick={handlePost}>
                Post
              </Button>
            </StyledPaper>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Create;
