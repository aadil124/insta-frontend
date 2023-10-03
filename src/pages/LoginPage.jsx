import { styled, Box, Typography } from '@mui/material';
import Logo from '../assets/logoinsta.png'
import fbImg from '../assets/fb.png'
import appstore from "../assets/app.png"
import playstore from "../assets/play.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import phoneImg from '../assets/login.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Container = styled(Box)`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
`

const MainContainer = styled(Box)`
max-width:400px;
display:flex;
justify-content:center;
flex-grow:1;
flex-direction:column;
padding:20px 15px;
`

const UpperContainer = styled(Box)`
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
text-align:center;
padding:20px 15px;
`
const LowerContainer = styled(Box)`
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
margin-top:15px;
text-align:center;
font-size:14px;
padding:20px 15px;
&  span{
    color:#0095F6;
    cursor:pointer;
}
`
const ImgContainer = styled(Box)`
display:flex;
justify-content:center;
margin:10px 0;
& > img{
    height:40px;
    width: 130px;
    cursor:pointer;
    margin:0 5px;
}
`
const Image = styled("img")({
    height: 50,
    width: 174,
    objectFit: "cover",
    margin: 10,
})

const InputContainer = styled("form")`
display:flex;
flex-direction:column;
align-items:center;
& > div{
    width: 250px;
    display:flex;
    align-items:center;
    height:36px;
    margin:3px 0;
    border:1px solid rgb(219, 219, 219);
    border-radius:3px;
    overflow:hidden;
    background:rgb(245, 245, 245);
    & >span svg{
        margin-right:5px;
        color:gray;
        cursor:pointer;
    }
}
& >div input{
    border:none;
    width:100%;
    height:100%;
    outline:none;
    padding: 9px 0 7px 8px;
    background:none;
    font-size:12px;
}

& > button{
    width:250px;
    margin:10px 0;
    height:36px;
    border:none;
    outline:none;
    background:  #0095F6;
    color:white;
    border-radius:5px
}
`
const OrContainer = styled(Box)`
display:flex;
justify-content:center;
align-items:center;
margin:10px 0;
& > div{
    border:1px solid rgb(219, 219, 219);
    width:100px;
}
&>span{
    margin:0 12px;
    color:grey;
    font-weight:bold;
    font-size:14px;
}
`
const FbLoginContainer = styled(Box)`
display:flex;
justify-content:center;
align-items:center;
color:#2851A3;
margin:10px 0;
& > p{
    font-size:14px;
    font-weight:600;
}
&> img{
    width:15px;
    margin-right:8px;
}
`
const PhoneImage = styled("img")(({ theme }) => ({
    height: "80vh",
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}))


const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password)
        } catch (error) {
            console.log(error)
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/")
    })
    return (
        <Container>
            <Box>
                <PhoneImage src={phoneImg} alt="phone image" />
            </Box>
            <MainContainer>
                {/* upper container start  */}
                <UpperContainer>
                    {/* instagram logo start  */}
                    <Image src={Logo} alt="instagram logo" />
                    {/* instagram logo end  */}

                    {/* input container start */}
                    <InputContainer>
                        <Box>
                            <input type="email"
                                placeholder='Phone number,username or email address'
                                name='email'
                                value={formValues.email}
                                onChange={(e) => setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.currentTarget.value
                                })}
                            />
                        </Box>
                        <Box>
                            <input type={showPassword ? "text" : "password"}
                                name='password'
                                placeholder='password'
                                value={formValues.password}
                                onChange={(e) => setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value
                                })}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <VisibilityIcon fontSize='small' /> : <VisibilityOffIcon fontSize='small' />}
                            </span>
                        </Box>
                        <button onClick={(e) => handleLogin(e)} >Log in</button>
                    </InputContainer>
                    {/* input container end  */}

                    {/* or container start  */}
                    <OrContainer>
                        <Box></Box>
                        <Box component='span' >OR</Box>
                        <Box></Box>
                    </OrContainer>
                    {/* or container end  */}

                    {/* login with container start */}
                    <FbLoginContainer>
                        <img src={fbImg} alt="fb logo" />
                        <Typography>Log in with Facebook</Typography>
                    </FbLoginContainer>
                    {/* login with cotnainer end  */}

                    {/* forgot password start  */}
                    <Typography style={{ textAlign: "center", fontSize: "12px", margin: "10px 0" }} >Forgotten your password?</Typography>
                    {/* forgot password end  */}
                </UpperContainer>
                {/* upper container end  */}

                {/* lower container start  */}
                <LowerContainer>
                    <Box>Dont have an account?&nbsp;
                        <Box component="span" onClick={() => navigate('/signup')} >Sign up</Box>
                    </Box>
                </LowerContainer>
                {/* lower container end  */}

                {/* get the app text start  */}
                <Typography style={{ textAlign: "center", fontSize: "14px", margin: "8px 0" }} >Get the app</Typography>
                {/* get the app text end  */}

                {/* app/play img start  */}
                <ImgContainer>
                    <img src={playstore} alt="playstore logo" />
                    <img src={appstore} alt="appstore logo" />
                </ImgContainer>
                {/* app.play img end  */}
            </MainContainer>
        </Container>
    )
}

export default LoginPage


