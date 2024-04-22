import { View, StyleSheet} from "react-native";
import { useState } from "react";
import { TextInput, Button, Text } from "react-native-paper";

const ButtonComponent = (props) => {
  const buttonName = props.buttonName
  const color = props.color
  //let height = props.size

  const goToNewAcount = () => {
    props.navigation.navigate('Nova Conta')
  }

  return(
    <View>
      <Button onPress={goToNewAcount} style={styles.button} mode="contained" buttonColor={color} labelStyle={{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
        {buttonName}
      </Button>
    </View>

  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular'
  }
})

export default ButtonComponent