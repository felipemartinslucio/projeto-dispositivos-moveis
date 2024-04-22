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

const NewAcount = ()=> {
  return(
    <PaperProvider >
      <View style={styles.ctBackground}>
        <View>
          <Input labelName='E-mail' placeholder='jurandir.pereira@hotmail.com'></Input>
          <Input labelName='Senha' placeholder=''></Input>
          <Input labelName='Repetir senha' placeholder=''></Input>
          <Text style={styles.text}>O campo repetir senha difere da senha</Text>
          <View style={styles.ctButton}>
          <Button style={styles.buttonCad} mode="contained" labelStyle=  {{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
          CADASTRAR
          </Button>
          </View>
        </View>
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  ctBackground:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
    paddingHorizontal: 100,
    paddingVertical: 30
  },
  ctButton:{
    marginTop: 20
  },
  text:{
    fontFamily: 'AveriaLibre-Regular',
    color: '#FD7979',
    fontSize: 20
  },
  buttonCad:{
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D'
  }
  
})

export default NewAcount