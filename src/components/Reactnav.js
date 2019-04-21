import React from "react";
import {LogoTitle} from "./LogoTitle";
import { Button,View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              Id: 86,
              othrs: 'parameters',
            });
          }}
        />
      </View>
    );
  }
}

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

class ProfessionalExperience extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Currently working at xyz software company as technical lead.</Text>
        
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    //creating parameters with default value
    const { navigation }= this.props;
    const Id= navigation.getParam('Id','No ID found');
    const othrs= navigation.getParam('othrs','No parameters found yet!');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>Id: {JSON.stringify(Id)}</Text>
        <Text>othrs: {JSON.stringify(othrs)}</Text>
        <Button
          title="Go to Professional Experience"
          onPress={() => this.props.navigation.navigate(ProfessionalExperience,
          {Id: Math.floor(Math.random()*100),
          })}
        />
        <Button
          title="Go to Education"
          onPress={() => this.props.navigation.navigate(Education,
          {Id: Math.floor(Math.random()*100),
          })}
        />
        <Button
          title="Go to Personal Information"
          onPress={() => this.props.navigation.navigate(PersonalInformation,
          {Id: Math.floor(Math.random()*100),
          })}
        />        
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go Back to Previous window"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}



const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  },
  ProfessionalExperience: {
    screen: ProfessionalExperience
  },
  Education: {
    screen: Education
  },
  PersonalInformation: {
    screen: PersonalInformation
  }
},
  {
    initialRouteName:"Home", //good to set default route so that if route sequence changed screen should change
    defaultNavigationOptions:{
      title: 'Resume',
      headerTitle:<LogoTitle />,
      headerStyle: {
        position:'center',
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);  