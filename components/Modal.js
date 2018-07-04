import React, { Component } from 'react';
import { StyleSheet, View, Modal, Text, Button, Platform } from 'react-native';


class ModalFrame extends Component {

      render() {
        return (
      
           <View style={styles.MainContainer}>
              <Modal
                transparent={false}
                animationType={"slide"}
                visible={this.props.visible}
                onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >
  
                <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={styles.ModalInsideView}>
                      {/* add components to modal here! */}
                      <Text style={styles.TextStyle}>Wow it finaly worked</Text>
                      <Button  title="Click Here To Hide Modal" onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } />
                  </View>
                </View>
              </Modal>
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
        textAlign: 'center'
      
  }
   
});

export default ModalFrame;