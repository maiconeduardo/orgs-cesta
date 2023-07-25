import React from "react";
import { StyleSheet, View} from "react-native";

import Topo from './componentes/Topo';
import Detalhes from "./componentes/Detalhes";





export default function Cesta({topo, detalhes})
{

    return <>
        {/* Em source é usado topo para enviar o caminho da imagens que se encontra em import, diferente do style que adiciona o estilo*/}
        
        <Topo {...topo}/>
        <View style={estilos.container}>
            <Detalhes {...detalhes}/>
        </View>
          

          
       
      </>

       
}

const estilos = StyleSheet.create({

    container:{
        paddingVertical: 8,
        paddingHorizontal:16,
    },

  

});
