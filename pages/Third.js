import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Thirdjson from '../components/Thirdjson';



export default class Third extends React.Component {
     render() {
        return (
            <View>
                <Thirdjson/>
            </View>
        );
    
        }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAEBD7'
        }
      });




