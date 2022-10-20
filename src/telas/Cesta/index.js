//caso não queiramos usar chave na function que criamos colocamos ela como default
//ex: export default function Cesta(){}
import React from 'react';
import {StyleSheet, View} from 'react-native' //usamos chaves pq pegamos um componente exportado do react native

//let topo = require('../../assets/topo.png')
import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes'

//<></> fragmento que agrupa os outros componentes que estãono return
//sem a necessidade de criar outra view, outra camada
export default function Cesta({ topo, detalhes }) {//usei o export para que eu possa exportá-lo, usá-lo em outros arquivos
    return <>
        <Topo {... topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
        </View>
    </> 
}

//570 é a altura da imagem e 768 é a largura
const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});