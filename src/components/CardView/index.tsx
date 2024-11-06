import {useEffect, useState} from 'react';
import { Button, Image, Text, View, ImageBackground } from 'react-native';

import { styles } from './styles';
import Logo from "../../../assets/logo.png"
import BallonsBackground from "../../../assets/ballons_background.jpg";
import Divider from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../Constants/car';
import BuyButton from '../BuyButton';
import { CarModel } from './props';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';

export default function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);
  const [congratulationsVisible, setCongratulationsVisible] = useState<"flex" | "none">("none");

  useEffect(() => {
    (async () => {
      await loadCarData(1, setCarData);
    })();
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  const renderCarDetails = () => (
    <View style={{alignItems: "center"}}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{uri:`${CAR_ASSETS_BASE_URL}${carData?.id}.png`}}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceContainer}>
      <Button title='<' color={"#01A6B3"} onPress={() => handlePreviousItem(carData, setCarData)} />
      <Text style={styles.priceLabel} onPress={() => {}}>{carData?.price}</Text>
      <Button title='>' color={"#01A6B3"} onPress={() => handleNextItem(carData, setCarData)} />
    </View>
  );

  const renderCongratulationsOnYourPurchase = () => (
    <ImageBackground 
      source={BallonsBackground} 
      resizeMode='stretch'
      style={[styles.congratulationsContainer, {display: congratulationsVisible}]}
    >
      <Text style={[styles.carName, {marginTop: 20}]}>{carData?.carName}</Text>
      {renderCarImage()}
      <Text style={[styles.congratulationsText, styles.congratulationsTextBig]}>Congratulations</Text>
      <Text style={styles.congratulationsText}>on your purchase</Text>
      <View style={styles.congratulationsButtonContainer}>
        <Button title='RETURN' onPress={() => setCongratulationsVisible("none")} />
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.imageContainer}>
        {renderLogoBox()}
        <Divider />
        {renderCarDetails()}
        {renderCarImage()}
        <Divider />
        <BuyButton onPress={() => setCongratulationsVisible("flex")} />
        {renderPriceControls()}
        {renderCongratulationsOnYourPurchase()}
    </View>
  );
}