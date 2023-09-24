"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CloudShiftIcon from './CloudShiftIcon';
import Link from '@mui/material/Link';


const pages = [{ linK: 'https://github.com/oslabs-beta/CloudShift', title: 'Download' }, { linK: 'https://github.com/oslabs-beta/CloudShift#what-cloudshift-does-and-doesnt', title: 'How It Works' }, { linK: 'https://medium.com/cloudshift/cloudshift-data-migration-simplified-f5c4848d7cb8', title: 'Our Story' }, { linK: 'https://www.linkedin.com/company/93845906', title: 'Contact' }];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={
            {
                backgroundColor: '#36bfff11',
                color: '#272839',
            }
        }>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <CloudShiftIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, height: '2rem', width: '2rem' }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="https://www.cloudshift.dev"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        CloudShift
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                    <Link href={page.linK} target='_blank' rel="noopener" underline="none" sx={{ color: 'inherit' }}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <CloudShiftIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="https://www.cloudshift.dev"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        CloudShift
                    </Typography>
                    <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', gap: '2rem', display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link key={page.title} href={page.linK} target='_blank' rel="noopener" underline="none" sx={{ color: 'inherit' }}>
                                <Button
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'inherit', display: 'block', ":hover": { backgroundColor: '#ffffffdd', boxShadow: '0px 0px 5px 5px #ffffffdd' } }}
                                >
                                    {page.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
