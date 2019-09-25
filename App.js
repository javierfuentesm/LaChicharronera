import React from 'react';
import { Button, View, Text,TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state = {text2: ''};
    this.state = {text3: ''};
  

  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenido</Text>

        <TextInput
          style={{height: 40}}
          placeholder="Ingresa el valor de a"
          onChangeText={(a) =>  this.setState({text:a})}
          
        />
         <TextInput
          style={{height: 40}}
          placeholder="Ingresa el valor de b"
          onChangeText={(b) =>  this.setState({text2:b})}
          
        />
         <TextInput
          style={{height: 40}}
          placeholder="Ingresa el valor de c"
          onChangeText={(c) =>  this.setState({text3:c})}
          
        />
        <Button
          title="Ingresar"
          onPress={() => {

            let a = parseInt(this.state.text);
            let b = parseInt(this.state.text2);
            let c = parseInt(this.state.text3);
            console.log(a);
            console.log(c);
            console.log(b);
            let solucion1=(-b+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
            let solucion2=(-b-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);

            this.props.navigation.navigate('Details', {
              raiz1: solucion1,
              raiz2: solucion2

            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenido</Text>
      
        <Text>
          El valor de la solución uno
          {JSON.stringify(navigation.getParam('raiz1', 'default value'))}
        </Text>

        <Text>
          El valor de la solución dos
          {JSON.stringify(navigation.getParam('raiz2', 'default value'))}
        </Text>
     
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export default createAppContainer(RootStack);
