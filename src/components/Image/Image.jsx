import React, { useState, Fragment } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';

//Componente para exibir imagens da página.
//Exibe um modal com a imagem ao clicar nela, exceto se for desativado ou a imagem tiver um link
export default function Image(props) {

    const [showModal, setShowModal] = useState(false); //Estado do modal

    const enableAnchor = (props.href !== undefined && props.href !== null); //true se a imagem conter um link
    const enableModal = (props.disableModal || enableAnchor) ? false : true; //ativa ou desativa o modal
    const mouseCursor = (enableModal) ? "pointer" : "inherit"; //Indica se a imagem fará alguma ação ao ser clicada

    function ImageModal(props) {
        if(enableModal){
            return (
                <Modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    aria-labelledby="image-modal"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingX: "1em"
                    }}
                >
                    <Paper sx={{display: "flex", justifyContent:"center"}}>
                        <img src={props.src} alt={props.alt} style={{width: "100%", height: "100%"}}></img>
                    </Paper>
                </Modal>
            )
        }
        return <Fragment></Fragment>; //Se o modal for destivado, retorna um Fragment, que não aparecerá na página
    }

    return (
        <Anchor href={props.href} enable={enableAnchor}> {/* Link da imagem */}
            <Box sx={{ ...props, ...props.sx, cursor: mouseCursor }} //Estilo do Box, que envolve a imagemm

                onClick={() => setShowModal(true)}>
                
                <img src={props.src} alt={props.alt} style={{
                    //Faz a imagem ocupar todo o Box, e aplica o estilo passado pelas props
                    ...props.style,
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                }}>
                    {props.children}
                </img>

            </Box>
            <ImageModal src={props.src} alt={props.alt} /> {/* Modal */}
        </Anchor>
    );
}

function Anchor(props) {
    if (!props.enable) {
        return (<Fragment>{props.children}</Fragment>) //Se não tiver um link, retorna somente a imagem
    }
    return (
        <a href={props.href}>{props.children}</a> //Se tiver um link, retorna a imagem dentro de uma tag <a>
    )
}