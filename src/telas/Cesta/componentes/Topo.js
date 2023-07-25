import React from "react";
import { Text,StyleSheet, Dimensions,Image } from "react-native";
import topo from '../../../../assets/topo.png';
import Texto from '../../../../src/componentes/Texto.js';
const width = Dimensions.get('screen').width;


export default function Topo({titulo})
{

    return <>
    
    <Image source={topo} style={estilos.topo} />
           
        <Texto style={estilos.titulo}> 
            {titulo}
        </Texto>
    </>
}
const estilos =StyleSheet.create({
    topo: {
        width: "100%",
        height: 578/768 * width,
    },
 
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 20,
        color: "white",
        padding: 16,
        fontWeight: "bold",
      

    },


})