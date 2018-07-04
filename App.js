import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import MissionButton from './components/MissionButton';
import ModalFrame from './components/Modal'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props) {
    super(props);
      this.state = { 
        ModalVisibleStatus: false 
      };
    }

  ShowModalFunction(visible) {
    this.setState({ModalVisibleStatus: visible});
    }

    render() {
      return (
    
         <View style={styles.MainContainer}>
            <MissionButton 
            onPress={() => { this.ShowModalFunction(true) }}
            missionDate={"22 MAR"}
            missionTime={"@0900"}
            missionName={"Tower01"}
            missionLocation={"Telstra - Broken Hill"}
            >
            </MissionButton>

            <ModalFrame visable={this.state.ModalVisibleStatus}>
            </ModalFrame>
         </View>     
      );
   }
}



const styles = StyleSheet.create({
 
    MainContainer :{
        
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Platform.OS == 'ios') ? 20 : 0
    
    },
    
    ModalInsideView:{
    
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor : "#00BCD4", 
      height: 300 ,
      width: '90%',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    
    },
    
    TextStyle:{
    
      fontSize: 20, 
      marginBottom: 20, 
      color: "#fff",
      padding: 20,
      // textAlign: 'center',
      // fontFamily: 'SourceSansPro-Light',
      // fontSize: 10,
    
}
 
});