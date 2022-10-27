//caso não queiramos usar chave na function que criamos colocamos ela como default
//ex: export default function Cesta(){}
import React from 'react';
import {FlatList, StyleSheet, View, } from 'react-native' //usamos chaves pq pegamos um componente exportado do react native

import Texto from '../../components/Texto'
//let topo = require('../../assets/topo.png')
import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes'
//import Itens from './Componentes/Itens';
import Item from './Componentes/Item';

//<></> fragmento que agrupa os outros componentes que estãono return
//sem a necessidade de criar outra view, outra camada
export default function Cesta({ topo, detalhes, itens }) {//usei o export para que eu possa exportá-lo, usá-lo em outros arquivos
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                <Topo {...topo} />
                <View style={estilos.cesta}>
                    <Detalhes {...detalhes} />  
                    <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                </View>
                </>
            }}
        />   
    </> 
}

//570 é a altura da imagem e 768 é a largura
const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});