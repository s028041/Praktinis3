import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Firstjson from '../components/Firstjson';



export default class First extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
    const {navigate} = this.props.navigation; 
    return (

        <View >
         <Firstjson/>
          <TouchableOpacity style={styles.button}
           onPress={() => navigate('Details')}>
          <Text>Darbo Patirtis</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
           onPress={() => navigate('Info')}>
          <Text>Asmeniniai gebejimai</Text>          
          </TouchableOpacity>
           
        </View>
    );

  }}
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#bcb2a4',
          top: 50,
         margin: 20,
        },
       
        navigatorText: {
          marginTop: 30,
          paddingTop: 100,
          padding: 5,
         
        },
        button: {
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor: '#bcb2a4',
            paddingTop: 25,
            margin: 10,
            top: 50,
        }
      });






