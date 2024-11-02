import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {styles} from "./styles";

export default function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox} >
        <View style={styles.triangleCorner} ></View>
        <View style={[styles.triangleCorner, styles.topRight]} ></View>
        <View style={[styles.triangleCorner, styles.bottomLeft]} ></View>
        <View style={[styles.triangleCorner, styles.bottomRight]} ></View>
      </View>
    </View>
  )
}