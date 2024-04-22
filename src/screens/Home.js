import { View, StyleSheet, Image} from "react-native";
import { useState } from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper"
import { TextInput, Text, Button, Searchbar } from "react-native-paper";
import Input from "../components/Input";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    secondary: 'yellow'
  }
}

const Home = ()=> {

  const [searchQuery, setSearchQuery] = useState('');

  return(
    <PaperProvider >
      <View style={styles.ctBackground}>
        <View>
          <Searchbar placeholder="Insira o termo de busca" onChangeText={setSearchQuery} value={searchQuery}/>
          <View style={styles.ctImages}>
            <Image  source={require('../Images/Group1.jpg')} style={styles.Image}/>
            <Image  source={require('../Images/Group2.jpg')} style={styles.Image}/>
            <Image  source={require('../Images/Group3.jpg')} style={styles.Image}/>
          </View>
          <Button style={styles.buttonNew} mode="contained" labelStyle=  {{fontFamily: 'AveriaLibre-Regular', color: '#FFFFFF'}}>
            NOVA PESQUISA
            </Button>
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
    paddingVertical: 50
  },
  buttonNew:{
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#37BD6D'
  },
  ctImages:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Image:{
    width: 75,
    height: 75
  }
  
})

export default Home