import React, { useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

function Navbar() {
    const [openMenu,setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
          },
          {
            text:'Services'
          },
          {
            text:'Amenities'
          },
          {
            text: "Testimonials",
            icon: <CommentRoundedIcon />,
          },

          {
            text: "FAQ",
            icon: <InfoIcon />,
          },
          
          {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
          },
    ]
  return (
    <>
<nav>
      <div className="navbar-links-container text-center me-5  justifify-content-center">
        <a href="/"><HomeIcon /></a>
        <a href="/">SERVICES</a>
        <a href="/">AMENITIES</a>
        <img src="https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530029256964-CV7MA5GKTQE3U3NZMNAA/upstate-laundromat-logo.png?format=1500w" alt=""  width='200px'className='me-5'/>
        <a href="/">TESTIMONIALS</a>
        <a href="/faq">FAQ</a>
        <a href="/contact">CONTACT</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>

    
    </>
  )
}

export default Navbar