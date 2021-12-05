import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import parse from 'html-react-parser';
import Image from "../../components/Image/Image";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import EdutechJFN from '../../assets/edutech-jfn.jpeg';
import DesafioPNG from '../../assets/desafio.png';

import { posts } from "./posts.json"; //Importa as postagens para a página

export default function Blog() {

    //Array das imagens dos posts
    const postsImages = [
        EdutechJFN,
        DesafioPNG
    ]

    return (
        <Grid container gap={3} direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center" >

            <Grid item xs={12} marginTop={2}>
                <Typography variant="h3">Blog</Typography> {/* Título do Blog */}
            </Grid>

            {   //Exibe as postagens na página
                posts.map((post, i) => (
                    <Grid container item gap={2} direction="column" xs={12} component={Paper} elevation={5} padding="1em" key={"post" + i}>
                        <Grid container item direction="column">
                            <Typography variant="h4">{post.title}</Typography> {/* Título da postagem */}
                            <Grid item display="flex" >
                                <CalendarTodayIcon fontSize="small" sx={{ marginRight: ".3em" }} /> 
                                <Typography display="flex" alignItems="center">{post.date}</Typography> {/* Data da postagem */}
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography variant="h6" fontSize= {{ md: 20 }}>{post.headline}</Typography> {/* Manchete */}
                        </Grid>

                        <Grid item display="flex" justifyContent="stretch"> {/* Imagem da postagem */}
                            <Image src={postsImages[post.postImageIndex]} borderRadius={1} overflow="hidden" boxShadow={4} alt="Edutech na escola" />
                        </Grid>

                        <Grid item>
                            {   //Parágrafos da postagem
                                post.paragraphs.map((p, i) => (
                                    <Typography key={"p"+i} fontSize= {{ md: 18 }} > { 
                                        parse(p)  //Converte a string do parágrafo em código HTML
                                    } </Typography>
                                ))
                            }
                        </Grid>
                    </Grid>
                ))
            }
        </Grid>
    );
}