//caso não queiramos usar chave na function que criamos colocamos ela como default
//ex: export default function Cesta(){}
import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native' //usamos chaves pq pegamos um componente exportado do react native
//let topo = require('../../assets/topo.png')
import topo from '../../assets/topo.png'//importando uma imagem
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;
//<></> fragmento que agrupa os outros componentes que estãono return
//sem a necessidade de criar outra view, outra camada
export default function Cesta() {//usei o export para que eu possa exportá-lo, usá-lo em outros arquivos
    return <>
    <Image source={ topo } style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhe da sexta</Text>
    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda} >
            <Image source={ logo } style={estilos.imagemFazenda} />
            <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        
        <Text style={estilos.descricao}>Uma cesta com produtos selecionados 
            cuidadosamente da fazenda direto para a sua cozinha
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
    </View>
    </> 
}

//570 é a altura da imagem e 768 é a largura
const estilos = StyleSheet.create({
    topo: {
        width:"100%",
        height: 578 / 768 * width,
        fontFamily: "Montserrat"
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: "center",
        fontSize: '16',
        lineHeight: '26',
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MonteserratBold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MonteserratRegular",
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});