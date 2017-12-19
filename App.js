import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Platform, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import First from './pages/First';


const Ekranai = StackNavigator({
  Home: {
    screen: First,
        }
  });

export default class App extends Component {
  
     render() {
       return (
           <Ekranai/>
       );
     }
    }
    

