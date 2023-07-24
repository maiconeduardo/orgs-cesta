import React from "react";
import { Image, StyleSheet, Dimensions, Text, View, ScrollView } from "react-native";
import Texto from '../componentes/Texto.js';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';


const width = Dimensions.get('screen').width;



export default function Cesta()
{

    return <>
        {/* Em source é usado topo para enviar o caminho da imagens que se encontra em import, diferente do style que adiciona o estilo*/}
        
            <Image source={topo} style={estilos.topo} />
           
            <Texto style={estilos.titulo}> Detalhes da cesta</Texto>
            <View style={estilos.container} >
                    <Texto style={estilos.nome}>Cesta de verduras</Texto>
                    <View style={estilos.imgLogo}>

                            <Image source={logo} style={estilos.logo}  />
                            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>

                    </View>
                    
                    <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para cozinhar
                    </Texto>
                    
                    

                    <Texto style={estilos.preco}>R$: 40,00 </Texto>

            </View>
       
       </>

       
}

const estilos = StyleSheet.create({

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

    container:{
        paddingVertical: 8,
        paddingHorizontal:16,
    },

    nome: {
      fontSize: 26,
      lineHeight: 42,
      color: "#464646",
      fontWeight: "bold",
      

    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        
    },

    descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
    
    },

    preco: {
        color: "#2A9F85",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: "bold",
       
    },
    logo: {
        width: 32,
        height: 32,

    },
    imgLogo: {
        gap:10,
        flexDirection: "row",
        
        

    }

});