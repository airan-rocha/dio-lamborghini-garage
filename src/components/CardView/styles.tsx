import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  imageLogo: {
    flex: 1,
    width: "65%",
    resizeMode: "contain"
  },
  carBrand: {
    color: "#fff",
    fontWeight: '400',
    fontSize: 18,
    fontStyle: "italic",
  },
  carName: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flex: 1,
    marginBottom: 10,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10,
    alignItems: "center",
    marginTop: 10,
  },
  priceLabel: {
    color: "#fff",
    fontSize: 22,
  },
  congratulationsContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: "100%",
    height: "100%",
  },
  congratulationsText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff000",
    backgroundColor: "#000000",
    width: "100%",
    paddingVertical: 2,
  },
  congratulationsTextBig: {
    fontSize: 27,
    textTransform: "uppercase",
  },
  congratulationsButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});