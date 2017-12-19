import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Secondjson from '../components/Secondjson';



export default class Second extends React.Component {
    render() {
        return (
        
            <View style={styles.container}>
             <Secondjson/>
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
          backgroundColor: '#bcb2a4'
        }
    });

