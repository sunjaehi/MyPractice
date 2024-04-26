import React, { useState } from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import {styled,alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Train } from "@mui/icons-material";

const Search = styled('div')(({theme})=>({
    position:'relative',
    borderRadius:theme.shape.borderRadius,
    backgroundColor:alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor:alpha(theme.palette.common.white,0.25),
    },
    marginRight:theme.spacing(2),
    marginLeft:0,
    width:'100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft:theme.spacing(3),
        width:'auto'
    },
}));
const SerachIconWrapper = styled('div')(({theme})=>({
    padding:theme.spacing(0,2),
    height:'100%',
    position:'absolute',
    pointerEvents:'none',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
}));
const StyledInputBase = styled(InputBase)(({theme})=>({
    color:'inherit',
    '& .MuiInputBase-input':{
        padding:theme.spacing(1,1,1,0),
        paddingLeft:`calc(1em + ${theme.spacing(4)})`,
        transition:theme.transitions.create('width'),
        width:'100%',
        [theme.breakpoints.up('md')]:{
            width:'20ch'
        },
    },
}));
function Geolocation() {
    const [anchorEl, setAnchorEl]=useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl]=useState(null);

    const isMenuOpen=Boolean(anchorEl);
    const isMobileMenuOpen=Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu   
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical:'top',
                horizontal:'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical:'top',
                horizontal:'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu   
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical:'top',
                horizontal:'right'
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical:'top',
                horizontal:'right'
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            
        </Menu>
    )
    //https://github.com/mui/material-ui/blob/v5.15.15/docs/data/material/components/app-bar/PrimarySearchAppBar.js
    
    return (
        <Box sx={{'& > not(style)':{m:1}, margin:"10px"}}>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                    아이디
                </InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <TextField
                id="input-with-icon-textfield"
                label="비밀번호"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),             
                }}
                variant="standard"
            />
            <MyLocationIcon onClick={
                console.log('failed')
            }/>
        </Box>
    );
}
export default Geolocation;