import React,{Component} from "react";
import { Button,View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class Education extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
              Completed Bachelors in 2018
              Inter in Engineering
              Matric in science
          </Text>
          
        </View>
      );
    }
  }
  export {Education}