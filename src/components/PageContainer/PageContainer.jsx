import React from "react";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

//Container que envolve as páginas do site, se ajusta ao tamanho da tela e ao tema
//O primeiro é o fundo da página, só aparecerá em larguras de tela maiores que 1400 pixels (um monitor ultrawide, por exemplo)
export default function PageContainer(props) {

    const { darkMode } = props;

    return (
        <Container disableGutters maxWidth={false} sx={{bgcolor: 'background.default', minHeight: '100%'}}>
            <Container component={Paper} elevation={darkMode ? 1 : 24} sx={{padding: {xs: '.5em', sm: '1em', lg: '1em 20px'}, maxWidth: {lg: 1400}}}>
                {props.children} 
            </Container>
        </Container>
    );
}