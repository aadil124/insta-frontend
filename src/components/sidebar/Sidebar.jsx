/* eslint-disable no-unused-vars */
import { Container } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Avatar, Box, MenuItem } from "@mui/material";
import logo from "../../../public/assets/logoinsta.png";
import { Link } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useCookies } from "react-cookie";

const links = [
  {
    id: 1,
    icon: <HomeIcon fontSize="large" />,
    name: "Home",
    to: "/home",
  },
  {
    id: 2,
    icon: <SearchIcon fontSize="large" />,
    name: "Search",
  },
  {
    id: 3,
    icon: <MapsUgcIcon fontSize="large" />,
    name: "Messages",
  },
  {
    id: 4,
    icon: <SearchIcon fontSize="large" />,
    name: "Explore",
  },
  {
    id: 5,
    icon: <FavoriteBorderIcon fontSize="large" />,
    name: "Notification",
  },
  {
    id: 6,
    icon: <ControlPointIcon fontSize="large" />,
    name: "Create",
    to: "/create",
  },
];

const Sidebar = () => {
  const [cookies, setCookies, removeCookies] = useCookies(["access_token"]);

  const logout = () => {
    localStorage.clear();
    removeCookies("access_token");
  };

  return (
    <>
      <Container>
        <img src={logo} alt="logo" />
        {links.map((link) => (
          <>
            <MenuItem key={link.id}>
              <Link to={link?.to}>
                <Box>{link.icon}</Box>
                <Box>{link.name}</Box>
              </Link>
            </MenuItem>
          </>
        ))}
        <MenuItem>
          <Link to="/profile">
            <Box>
              <Avatar />
            </Box>
            <Box>Profile</Box>
          </Link>
        </MenuItem>
        <MenuItem
          sx={{ display: "flex", gap: "2rem", alignItems: "center" }}
          onClick={logout}
        >
          <Box>
            <PowerSettingsNewIcon fontSize="large" />
          </Box>
          <Box>Logout</Box>
        </MenuItem>
      </Container>
    </>
  );
};

export default Sidebar;
