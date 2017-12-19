import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Platform, Image } from 'react-native';



export default class Second extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

  GetItem (flower_name) {
    
   Alert.alert(flower_name);
   
   }

componentDidMount() {
    return fetch('https://api.myjson.com/bins/16yf4b')
    .then((response) => response.json())
    .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson.Apie),
        }, function() {
            //veiksmas su nauju state
        });
        })
        .catch((error) => {
            console.error(error);
        });
    }
    

    render() {
        if(this.state.isLoading) {
            return (
                <View>
                <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.MainContainer}>
 
       <ListView
 
         dataSource={this.state.dataSource}
 
 
         renderRow={(rowData) =>
 
        <View >
            <Text style={[styles.textViewContainer2]}>{ rowData.mokslas + ":"}</Text>
          <Text style={[styles.textViewContainer]}>{ rowData.mokykla}</Text>
          <Text style={[styles.textViewContainer2]}>{ rowData.darbovietes}</Text>
          <Text style={[styles.textViewContainer]}>{ rowData.darbas}</Text> 
 
        </View>
         }
         />
         </View>
            );
        }}

        const styles = StyleSheet.create({
            
            MainContainer: {
                justifyContent: 'center',
                margin: 5,
                paddingTop: (Platform.OS === 'ios') ? 20 : 0,  
                },
                 
                imageViewContainer: {
                width: '50%',
                height: 100 ,
                margin: 10,
                borderRadius : 10
                },
                textViewContainer: {
                    marginLeft: 120,
                    width:'50%', 
                    padding: 20,
                    color: '#DC143C',
                    
                    fontSize: 15,
                   
                },
                textViewContainer2: {
                    fontWeight: 'bold',
                    marginLeft: 100,
                    width:'50%', 
                    padding: 20,
                    color: '#000000',
                    bottom: 0,
                    fontSize: 24,
                }
        
       });
    