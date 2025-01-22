import { SplashScreen, Stack } from 'expo-router';
import { useFonts,  } from 'expo-font';
import { useEffect } from 'react';

// SplashScreen.preventAutoHideAsync();
export default function HomeScreen() {
  // const [font] = useFonts({ JosefinSans: require('../assets/fonts/static/JosefinSans-BoldItalic.ttf')});
  // useEffect(() => {
  //   if(font){
  //     SplashScreen.hideAsync();
  //   }
  // }, [font]);

  // if(!font){
  //   return null;
  // }

  return (
      <Stack>
        <Stack.Screen name='screens' options={{headerShown:false}} />
      </Stack>
  );
}