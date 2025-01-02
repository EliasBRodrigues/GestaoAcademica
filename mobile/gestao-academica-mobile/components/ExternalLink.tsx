import React, { useCallback } from 'react';
import { TouchableOpacity, Linking, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useRouter } from 'expo-router'; 

type LinkButtonProps = {
  href: string;
  iconName: string; 
  size?: number; 
  color?: string; 
};

const LinkButton = ({ href, iconName, size = 24, color = 'blue' }: LinkButtonProps) => {
  const router = useRouter();

  const handlePress = useCallback(async () => {
    if (href.startsWith('../../../') || href.startsWith('/')) {
      if (typeof href === 'string') {
        router.push(href);
      }
    } else {
      if (Platform.OS !== 'web') {
        await Linking.openURL(href);
      } else {
        Linking.openURL(href);
      }
    }
  }, [href, router]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default LinkButton;
