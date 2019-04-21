import React,{Component} from "react";
import { Button,View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class ProfessionalExperience extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Currently working at xyz software company as technical lead.</Text>
          
        </View>
      );
    }
  }
  export {ProfessionalExperience}