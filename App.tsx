import React from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from './src/contexts/AuthContext';
import AppNav from './src/navigation/AppNav';
import AppLoading from 'expo-app-loading';
const App: React.FC = () => {
  SplashScreen.preventAutoHideAsync();

  // Assurez-vous d'attendre SplashScreen.hideAsync()
  SplashScreen.hideAsync();

  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/Poppins/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/Poppins/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('./assets/Poppins/Poppins-ExtraLight.ttf'),
    'Poppins-Italic': require('./assets/Poppins/Poppins-Black.ttf'),
    'Poppins-Black': require('./assets/Poppins/Poppins-Black.ttf'),
    'Poppins-BlackItalic': require('./assets/Poppins/Poppins-BlackItalic.ttf'),
    'Poppins-Regular': require('./assets/Poppins/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
