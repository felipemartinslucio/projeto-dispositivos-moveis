import { View, StyleSheet} from "react-native";
import { useState } from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper"
import { TextInput, Text, Button } from "react-native-paper";
import Input from "../components/Input";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    secondary: 'yellow'
  }
}

const PassRecovery = ()=> {
  return(
    <PaperProvider >
      <View style={styles.ctBackground}>
        <View style={styles.ctContent}>
          <View style={styles.ctInput} >
            <Input labelName='E-mail' placeholder='jurandir.pereira@hotmail.com'></Input>
            <Text style={styles.text}>E-mail parece ser inválido</Text>
          </View>
          <View style={styles.ctButton}>
            <Button style={styles.buttonRec} mode="contained" labelStyle=  {{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
            RECUPERAR
            </Button>
            </View>
        </View>
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  ctInput:{
    //flex: 0.25
  },
  ctBackground:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
    paddingHorizontal: 100,
    paddingVertical: 50
  },
  ctButton:{
    marginTop: 80
  },
  text:{
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 20
  },
  buttonRec:{
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D'
  }
  
})

export default PassRecovery