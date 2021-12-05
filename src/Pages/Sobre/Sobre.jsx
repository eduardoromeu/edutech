import React, { useState, Fragment } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@emotion/react";
import { urlEditais, urlEtapas, trilhas } from "./texts.json";

export default function Sobre() {

    const [tab, setTab] = useState(0); //Estado das abas sobre as trilhas

    const handleTabs = (e, newTab) => {
        setTab(newTab);
    };

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const buttonColor = (theme.palette.mode === 'dark') ? "text" : "primary"; //Cor dos botões, muda no modo escuro para facilitar a visualização

    return (
        <Grid container gap={3} direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center">
            <Grid item xs={12} padding="1em" border={'2px solid' + theme.palette.primary.main} borderRadius={theme.shape.borderRadius} color="text.primaryColored">
                <Typography gutterBottom variant="h6" fontWeight="bold">Informações importantes</Typography>
                <Typography >Antes de realizar sua inscrição nos cursos de programação,
                    que são <Typography variant="p" fontWeight="bold">gratuitos</Typography>, fique atento às orientações abaixo:
                </Typography>
                <ul>
                    <Typography component="li" >As inscrições destinam-se a alunos e professores da Rede Pública Estadual do Paraná;</Typography>
                    <Typography component="li" >Caso o inscrito não receba o e-mail de confirmação, deve-se verificar a caixa de SPAM do seu e-mail "@escola";</Typography>
                    <Typography component="li" >Para que a inscrição seja realizada com sucesso, deve-se estar logado unicamente com sua conta @escola;</Typography>
                    <Typography component="li" >Processo de Credenciamento classifica os inscritos por ordem de inscrição;</Typography>
                    <Typography component="li" >Os selecionados serão informados do início das atividades, pelo seu e-mail @escola;</Typography>
                    <Typography component="li" >O término dos cursos oferecidos coincidem com o término do ano letivo vigente;</Typography>
                    <Typography component="li" >A plataforma de programação disponibilizará um certificado, ao final de cada conteúdo de estudo finalizado;</Typography>
                    <Typography component="li" >Para se inscrever no Programa EDUTECH, recomendamos que utilize um computador e conecte-se primeiro à sua conta @escola e, depois, acesse o link de inscrição abaixo;</Typography>
                    <Typography component="li" >Caso utilize um smartphone, acesse o link de inscrição abaixo utilizando uma janela anônima de seu navegador de internet e conecte-se à conta @escola;</Typography>
                    <Typography component="li" >Consulte <Typography fontWeight="bold" component="a" href={urlEditais[0]}> Edital nº 03/2021 - DTI/SEED;</Typography> </Typography>
                    <Typography component="li" > <Typography fontWeight="bold" component="a" href={urlEditais[1]}>Edital nº 04/2021 - DTI/SEED</Typography> - Retifica a quantidade de faltas pelas quais o cursista será considerado desligado, no Edital nº 03/2021 - DTI/SEED;</Typography>
                    <Typography component="li" > <Typography fontWeight="bold" component="a" href={urlEditais[2]}>Edital nº 05/2021 - DTI/SEED</Typography> - Retifica o disposto no item “4.3.1”, no Edital nº 03/2021 - DTI/SEED.</Typography>
                </ul>
            </Grid>

            <Grid item container direction={{xs: 'column', lg: 'row'}} gap={2} xs={12} color="text.primary"> 
                {/* Links para os alunos */}
                <Grid item xs gap={2} display="flex" flexDirection="column" alignItems="center" padding="1em" border={'2px solid' + theme.palette.primary.main} borderRadius={theme.shape.borderRadius}>
                    <Typography fontWeight="bold">Alunos</Typography>
                    <Button variant="contained" color="primary" href={urlEtapas[0]} sx={{ textTransform: 'none', textAlign: 'center' }}>Inscrição de Alunos para o Curso de Programação (com e-mail @escola)</Button>
                    <Button variant="outlined" color={buttonColor} href={urlEtapas[1]} sx={{ textTransform: 'none', textAlign: 'center' }}>Divulgação dos alunos selecionados - 1º Etapa</Button>
                    <Button variant="outlined" color={buttonColor} href={urlEtapas[2]} sx={{ textTransform: 'none', textAlign: 'center' }}>Divulgação dos alunos selecionados - 2º Etapa</Button>
                </Grid>

                {/* Links para os professores */}
                <Grid item xs gap={2} display="flex" flexDirection="column" alignItems="center" padding="1em" border={'2px solid' + theme.palette.primary.main} borderRadius={theme.shape.borderRadius}>
                    <Typography fontWeight="bold">Professores</Typography>
                    <Button variant="contained" color="primary" href={urlEtapas[3]} sx={{ textTransform: 'none', textAlign: 'center' }}>Inscrição de Professores para realizar o Curso (com e-mail @escola)</Button>
                    <Button variant="outlined" color={buttonColor} href={urlEtapas[4]} sx={{ textTransform: 'none', textAlign: 'center' }}>Divulgação dos professores selecionados - 1º Etapa</Button>
                    <Button variant="outlined" color={buttonColor} href={urlEtapas[5]} sx={{ textTransform: 'none', textAlign: 'center' }}>Divulgação dos professores selecionados - 2º Etapa</Button>
                </Grid>
            </Grid>

            <Grid item xs textAlign={{ xs: 'center', md: 'inherit' }} color="text.main" display="flex" flexDirection="column" alignItems="center" padding="1em" border={'2px solid' + theme.palette.primary.main} borderRadius={theme.shape.borderRadius}>
                <Typography variant="h6" fontWeight="bold">Trilhas de Estudo</Typography>
                {/* Abas das trilhas de estudos, mudam de acordo com o tamanho da tela */}
                <Tabs value={tab} onChange={handleTabs} indicatorColor="secondary" variant="scrollable" scrollButtons="auto" orientation={smallScreen ? 'vertical' : 'horizontal'} aria-label="tabs das trilhas">
                    <Tab label="Nível 1 (6º e 7º Anos)" />
                    <Tab label="Nível 2 (8º e 9º Anos)" />
                    <Tab label="1º Série" />
                    <Tab label="2º Série" />
                    <Tab label="3º Série e Técnico" />
                </Tabs>
                {/* Explicação sobre as trilhas, muda de acordo com a aba selecionada */}
                <TabPanel value={tab} index={tab}>
                    <Typography gutterBottom>
                        <Typography variant={smallScreen ? "subtitle1" : "p"} fontWeight="bold">
                            {trilhas[tab].title}
                            <Typography variant="p" display={smallScreen ? "none" : "inherit"}> - </Typography>
                        </Typography>
                        {trilhas[tab].titleSerie}
                    </Typography>
                    {
                        trilhas[tab].p.map((p, i) => (
                            <Typography gutterBottom align="left" key={"trilha"+i}>{p}</Typography>
                        ))
                    }

                    <Grid container minHeight={{ md: 315, sm: 235 }} display="flex" justifyContent="center" alignItems="stretch"> {/* Vídeo sobre a trilha */}
                        <Grid item minWidth={{ md: 560, sm: 420 }}>
                            <iframe width="100%" height="100%" src={trilhas[tab].videoUrl} title="Video Trilha 0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
                        </Grid>
                    </Grid>

                    <Typography>{trilhas[tab].ulTitle}</Typography>
                    
                    {/* Conteúdos das trilhas */}
                    <Grid container direction="column" gap={1} component="ul" textAlign="left" padding="0 20px" >
                        {
                            trilhas[tab].li.map((li, i) => {
                                if (li === "") { return (<br />) } else {
                                    return (
                                        <Grid item>
                                            <Typography component="li" key={"li"+i}>{li}</Typography>
                                        </Grid>
                                    )
                                };
                            })
                        }
                    </Grid>

                    <Extra />

                </TabPanel>
            </Grid>
        </Grid>
    );

    function Extra() {

        if (trilhas[tab].showExtra) {
            return (
                <Fragment>
                    <Typography gutterBottom marginTop="2em">
                        <Typography variant={smallScreen ? "subtitle1" : "p"} fontWeight="bold">
                            {trilhas[tab].extraUlTitle}
                            <Typography variant="p" display={smallScreen ? "none" : "inherit"}> - </Typography>
                        </Typography>
                        {trilhas[tab].extraUlTitleSerie}
                    </Typography>
                    {
                        trilhas[tab].extraP.map((p, i) => (
                            <Typography gutterBottom align="left" key={"extraP"+i}>{p}</Typography>
                        ))
                    }
                    <Typography>{trilhas[tab].ulTitle}</Typography>

                    <Grid container direction="column" gap={1} component="ul" textAlign="left" padding="0 20px" >
                        {
                            trilhas[tab].extraLi.map((li, i) => {
                                if (li === "") { return (<br />) } else {
                                    return (
                                        <Grid item>
                                            <Typography component="li" key={"extraLi"+i}>{li}</Typography>
                                        </Grid>
                                    )
                                };
                            })
                        }
                    </Grid>
                </Fragment>
            )
        } else {
            return <Fragment />
        }
    }

    {/* Painel das trilhas */}
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <Box
                role="tabpanel"
                hidden={value !== index}
                id={`trilhas-tabpanel-${index}`}
                aria-labelledby={`trilhas-tab-${index}`}
                padding="1em"
                {...other}
            >
                {value === index && (<Fragment>{children}</Fragment>)}
            </Box>
        );
    }

}