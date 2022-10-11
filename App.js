import { StatusBar, SafeAreaView, View } from 'react-native';
//SafeAreaView cria uma margem por fora no IOS
import Cesta from './src/telas/Cesta';//importando do arquivo que criei
import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

export default function App() {
  //criando uma const para carregar a fonte na nossa aplicação
  const [fonteCarregada] = useFonts({
    //estou costumizando o nome, para ficar mais fácil para usarmos
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  
  //fazer com que a aplicação não seja mostrada enquanto a fonte tá carregando
  if(!fonteCarregada) {
    return <View/>
  }
  
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
   
    </SafeAreaView>
  );
}

