import React,{Component} from "react";
import { Button,View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class PersonalInformation extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
              Name: Fuzza Raza
              Residential address: Karachi
          </Text>
          
        </View>
      );
    }
  }
  export {PersonalInformation}