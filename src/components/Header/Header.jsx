import React, { useEffect, useState, Fragment } from "react";
import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//Icones para o tema claro e escuro
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";

import Image from '../Image/Image';
import LogoLarge from '../../assets/logo-large.png';
import LogoLargeWhite from '../../assets/logo-large-white.png';

export default function Header(props) {

    const [scrollPos, setScrollPos] = useState(0);
    const [offsetHeight, setOffsetHeight] = useState(130);
    const { darkMode, setDarkMode } = props;

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const biggerScreen = useMediaQuery(theme.breakpoints.up('md'));

    const LogoImg = (darkMode) ? LogoLargeWhite : LogoLarge; //Define a imagem do logo para se adaptar ao tema

    //Pega o tamanho da tela e define o tamanho do placeholder para a página não ficar atrás do cabeçalho
    useEffect(() => {
        if (smallScreen) setOffsetHeight(190);
        if (biggerScreen) setOffsetHeight(130);
    }, [smallScreen, biggerScreen]); 

    //Pega a posição da rolagem da página, e muda seu estado
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollPos(window.scrollY);
    }

    //Muda o ícone do botão de trocar de tema
    const ChangeThemeIcon = () => {
        if (darkMode) return (<DarkModeIcon />)
        return (<LightModeIcon />);
    }

    return (
        <Fragment>
            <AppBar position="fixed" elevation={darkMode ? 1 : 5} sx={{padding: '16px'}}>
                {/* Grid principal, se adapta ao tamanho da tela */}
                <Grid container rowSpacing={{ xs: 3, md: 0 }} columnSpacing={{ xs: 0, md: 6 }} direction="row" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                    <Grid item xs={12} md="auto" display="flex" justifyContent="center" alignItems="center"> {/* Logo com link para a página inicial */}
                        <Link to="/"> <Image disableModal src={LogoImg} width={(scrollPos <= 100 && scrollPos >= 0) ? (256 - scrollPos) : 156} alt="Header logo"/> </Link>
                    </Grid> {/* Ele muda de tamanho de acordo com a rolagem da página, alterando a altura do cabeçalho também */}

                    {/* Botões de navegação */}
                    <Grid item display="flex" justifyContent="center" alignItems="center">
                        <Stack component="nav" direction="row" spacing={{xs: 2, md: 3}} alignItems="center">
                            <Link to="/">
                                <Button variant="contained" sx={{ boxShadow: 20 }}>
                                    Início
                                </Button>
                            </Link>
                            <Link to="/blog">
                                <Button variant="contained" sx={{ boxShadow: 20 }}>
                                    Blog
                                </Button>
                            </Link>
                            <Link to="/sobre">
                                <Button variant="contained" sx={{ boxShadow: 20 }}>
                                    Sobre
                                </Button>
                            </Link>
                            <Button variant="contained" onClick={() => setDarkMode(!darkMode)} sx={{ boxShadow: 20, display: { xs: 'inline-flex', md: 'none' } }}>
                                <ChangeThemeIcon /> {/* Botão do tema para telas menores, aparece junto com os botões de navegação */}
                            </Button>
                        </Stack>
                    </Grid>

                    <Grid item xs display={{ xs: 'none', md: 'flex' }} justifyContent="end" alignItems="center">
                        <Button variant="contained" onClick={() => setDarkMode(!darkMode)} sx={{ boxShadow: 20 }}>
                            <ChangeThemeIcon /> {/* Botão do tema para telas maiores, aparece no lado direito do cabeçalho */}
                        </Button>
                    </Grid>
                </Grid>
            </AppBar>
            {/* Box do mesmo tamanho do cabeçalho, não deixa o conteúdo ficar escondido */}
            <Box sx={{ height: offsetHeight, backgroundColor: theme.palette.background.default }} />
        </Fragment>
    );
}