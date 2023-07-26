import React from "react";
import { Image,View,StyleSheet, TouchableOpacity, Alert } from "react-native";
import Texto from '../../../../src/componentes/Texto.js';
import { ImageBackground } from "react-native-web";


export default function Detalhes ({nome, logoFazenda, nomeFazenda, descricao, preco, botao}){
return <>
    <Texto style={estilos.nome}>{nome}</Texto>
    <View style={estilos.imgLogo}>

        <Image source={logoFazenda} style={estilos.logo} />
        <Texto style={estilos.nomeFazenda}>
            {nomeFazenda}
        </Texto>

    </View>
    
        <Texto style={estilos.descricao}>
            {descricao}
        </Texto>
    
        <Texto style={estilos.preco}>
            {preco}
        </Texto>
    <TouchableOpacity style={estilos.botao} onPress={() =>({})}>
        <Texto style={estilos.textoBotao}>{botao}</Texto>
    </TouchableOpacity>
</>
}

const estilos = StyleSheet.create(
    {

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
              
                  
          },
          botao:{

            marginTop: 16,
           
            backgroundColor: '#2A9F85',
            paddingVertical: 16,
            borderRadius: 10,
            
            
          },
          textoBotao:{
                  
            textAlign:'center',
            color: "#ffffff",
            fontSize: 16,
            lineHeight: 26,
            fontWeight: 'bold',
          },


    }
)