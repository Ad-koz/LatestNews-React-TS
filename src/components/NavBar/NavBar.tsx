import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import {useContext} from 'react'
import { authContext } from "../../helpers/authContext";
import Button from '@mui/material/Button';
import {useState, useEffect} from 'react'
import { auth } from "../../helpers/firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';



const pages = ["Home", "Search"];

function ResponsiveAppBar() {

  const loggedIn = React.useContext(authContext)
  console.log()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [profilePhoto, setProfilePhoto] = useState('')

  useEffect (() => {
    if (loggedIn  && auth.currentUser) {
      const storage = getStorage();
      getDownloadURL(ref(storage, `/users/${auth.currentUser.uid}/profile`))
      .then((url) => {
        setProfilePhoto(url)
      })
      .catch(() => {
        setProfilePhoto('')
      })

    }

  }, [{loggedIn}])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" >
      <Container maxWidth="xl" sx={{background: "#C40F06"}}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
             
             {pages.map((page, i) => {
                // index 0: Home
                // index 1: Search
                if (i === 0) {
                  return (
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      to="/search"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                  );
                }
              })}
            </Menu>
          </Box>
          <NewspaperOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 100,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
             The Latest News
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            {loggedIn ? (
              <Link to="/user" style={{ textDecoration: "none" }}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={profilePhoto} />
                </IconButton>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button variant="contained" sx={{fontSize: '0.8rem'}}>Log in</Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
// 1. Stw??rz stan profilePhoto, warto???? pocz??tkowa: ''.
// 2. Zmie?? src avatara (u mnie linia 115) na stan profilePhoto
// 3. Wywo??aj useEffect, przypnij si?? na zmienn?? loggedIn
// 4. W ??rodku UE stw??rz ifa w kt??rym sprawdzisz czy loggedIn jest r??wne true i czy auth.currentUser istnieje
// WSZYSTKO PONI??EJ W IFIE
// 5. Wywo??aj funkcj?? getDownloadURL z dok??adnie takim samym refem jak w poprzednim zadaniu, otrzymany w thenie url wrzu?? do stanu profilePhoto. Dopisz do tego wywo??ania catcha, w ??rodku catcha ustawiaj stan profilePhoto na pustego stringa

