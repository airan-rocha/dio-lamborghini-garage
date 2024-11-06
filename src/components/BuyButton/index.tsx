import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { AntDesign } from "@expo/vector-icons"
import { styles } from './styles';

type BuyButtonProps = {
  onPress?: () => void | undefined
}

export default function BuyButton(props: BuyButtonProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <AntDesign name='shoppingcart' size={24} color="white" style={styles.icon}/>
            <Text style={styles.buttonText}>Buy This</Text>
        </TouchableOpacity>
    </View>
  );
}