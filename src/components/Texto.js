//componente para adicionar estilos de forma mais fácil e reutilizá-los, usei em Cesta.js
import React from "react";//sempre temos que fazer isso
import { StyleSheet, Text } from 'react-native';


//criando uma array de estudos
export default function Texto({children, style}) {//to passando o filho do elemento 
    let estilo = estilos.texto//definindo o estilo padrão

    if(style?.fontWeight === 'bold') {//colocamos a interrogação para que não dê erro caso
        estilo = estilos.textoNegrito
    }
    //filho para pegar tudo o que for passado dentro desse componente
    return <Text style={[style, estilo]}> { children } </Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})