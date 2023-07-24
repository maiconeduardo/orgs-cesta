import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import { setStatusBarHidden } from "expo-status-bar";
import { useFonts,NotoSans_700Bold, NotoSans_400Regular  } from '@expo-google-fonts/noto-sans';

export default function App() {
   let [fonteCarregada] = useFonts({
      "NotoSansBold": NotoSans_700Bold, 
      "NotoSansRegular":NotoSans_400Regular,
     });
   
     if (!fonteCarregada) {
       return <View />;
     }
  return (

     <SafeAreaView>
        <StatusBar />
        <Cesta />
     </SafeAreaView>
     

   
  
  );
}

