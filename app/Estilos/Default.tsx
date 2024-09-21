import {StyleSheet} from "react-native"
const estilo = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0c0a0e',
    },
    card: {
      width: 300,
      height: 200,
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 5, // Para Android
      shadowColor: '#000', // Para iOS
      shadowOffset: { width: 0, height: 2 }, // Para iOS
      shadowOpacity: 0.1, // Para iOS
      shadowRadius: 4, // Para iOS
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginVertical: 20,
      marginHorizontal: 30,
    },
    cardText: {
      fontSize: 18,
      color: '#fc0377',
      fontFamily: 'chiller',
    },
    imagem:{
      width:100,
      height:100,
      objectFit:"contain",
      resizeMode:"contain",
    },
  });

  export default estilo