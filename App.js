import { StatusBar, SafeAreaView, View } from 'react-native';
//SafeAreaView cria uma margem por fora no IOS

import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta/index';//importando do arquivo que criei
import mock from './src/moks/cesta'

export default function App() {
  //criando uma const para carregar a fonte na nossa aplicação
  const [fonteCarregada] = useFonts({
    //estou costumizando o nome, para ficar mais fácil para usarmos
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  //fazer com que a aplicação não seja mostrada enquanto a fonte tá carregando
  if(!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock}/> 
   
    </SafeAreaView>
  );
}

