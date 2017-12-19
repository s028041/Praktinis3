import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Platform, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third'; 

const Ekranai = StackNavigator({
  Home: {
    screen: First,
        },
		Details: {
    screen: Second,
            },
	Info: {
    screen: Third,
          },
  });

export default class App extends Component {
  
     render() {
       return (
           <Ekranai/>
       );
     }
    }
    

