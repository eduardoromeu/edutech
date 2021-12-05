import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from "@emotion/react";
import Image from '../../components/Image/Image';

import BannerDesafio from '../../assets/banner_desafio_edutech.png';
import LogoFull from '../../assets/logo-full.png';
import LogoFullWhite from '../../assets/logo-full-white.png';

//Página inicial
export default function Home() {
    
    const theme = useTheme();
    const CardLogoImg = (theme.palette.mode === 'dark') ? LogoFullWhite : LogoFull; //Imagem do card abaixo do banner do desafio, muda de acordo com o tema

    return (
        <Grid container gap={3} direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Image src={BannerDesafio} href="https://rebrand.ly/desafioEdutech" alt="Banner do Desafio" boxShadow={4} />
            </Grid>

            <Grid item gap={2} xs={12} display="flex" flexDirection="column">
                <Button fullWidth href="https://cursos.alura.com.br/edutech" variant="contained" color="primary" size="large" sx={{ boxShadow: 4, textTransform: 'none' }}>
                    Já é aluno? Clique aqui e faça login! {/* Botão que redireciona para a alura */}
                </Button>
                <Link to="/sobre">
                    <Button fullWidth variant="contained" color="secondary" size="large" sx={{ boxShadow: 4, textTransform: 'none' }}>
                        Não é aluno mas deseja se cadastrar? Clique aqui! {/* Botão que redireciona para a página de cadastro */}
                    </Button>
                </Link>
            </Grid>

            <Grid item xs={12}>
                <Card elevation={4} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                    <Image src={CardLogoImg} alignSelf="center" sx={{
                        minWidth: "250px",
                        minHeight: "250px",
                        maxWidth: { md: '250px' },
                        maxHeight: { md: '250px' }
                    }} />
                    <CardContent>
                        <Typography variant="body1" sx={{ textAlign: { xs: 'justify', lg: 'inherit' }, color: "text.main", fontSize: { md: 18 } }}>
                            Pautada nas “Diretrizes para Ensino de Computação na Educação Básica”, da Sociedade Brasileira de Computação,
                            e considerando as Competências Gerais da BNCC para a formação do jovem do século XXI, a Secretaria de Estado
                            da Educação e do Esporte, visando a compreensão plena do mundo, cada vez mais conectado e imerso em tecnologias
                            digitais, oportuniza a aprendizagem da programação a crianças, adolescentes e jovens matriculados nas instituições
                            de ensino da Rede Pública Estadual do Paraná, aumentando a capacidade de aprendizagem e resolução de problemas, promovendo
                            novas formas de expressão e pensamento com a utilização de linguagem digital, exercitando a curiosidade intelectual, o
                            pensamento crítico, científico e a criatividade e dando apoio ao aprendizado das demais disciplinas.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid container item xs={12} display="flex" justifyContent="center"> {/* Vídeo de apresentação */}
                <Grid item
                    width={{ xs: '100%', sm: 560, lg: 1120 }}
                    minHeight={{ xs: 168, sm: 315, lg: 630 }}
                >
                    <iframe
                        width="100%" height="100%" src="https://www.youtube.com/embed/X1M4ieNQ6OM" title="Vídeo Apresentação"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </Grid>
            </Grid>
        </Grid>
    );
}