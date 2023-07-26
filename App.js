import { StatusBar, SafeAreaView, View,Text } from 'react-native';
import { setStatusBarHidden} from "expo-status-bar";
import { useFonts,NotoSans_700Bold, NotoSans_400Regular  } from '@expo-google-fonts/noto-sans';
import Cesta from './src/telas/Cesta/index.js';
import mock from './src/mocks/cesta.js';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useCallback } from 'react';


export default function App() {
   let [fonteCarregada] = useFonts({
      "NotoSansBold": NotoSans_700Bold, 
      "NotoSansRegular":NotoSans_400Regular,
     });
   
     useEffect(() => {
      async function prepare() {
        try {
          await SplashScreen.preventAutoHideAsync();
        } catch (e) {
          console.warn(e);
        }
      }
      prepare();
    }, []);  
    const onLayoutRootView = useCallback(async () => {
      if (fonteCarregada) {
        await SplashScreen.hideAsync();
      }
    }, [fonteCarregada]);
  
    if (!fonteCarregada) {
      return null;
    }
  return (

     <SafeAreaView onLayout={onLayoutRootView} style={{flex:1}}>
        <StatusBar />
        <Cesta {...mock} />
        
     </SafeAreaView>
     

   
  
  );
}

