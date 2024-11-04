import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import Logo from "../../../assets/logo.png"

export default function CardView() {
  return (
    <View style={styles.imageContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.imageLogo} source={Logo} />
        </View>
    </View>
  );
}