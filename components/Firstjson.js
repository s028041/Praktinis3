import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Platform, Image,TouchableOpacity } from 'react-native';



export default class First extends Component {
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
    return fetch('https://api.myjson.com/bins/15peqz')
    .then((response) => response.json())
    .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson.Informacija),
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
                <View >
                <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.MainContainer}>
 
       <ListView
 
         dataSource={this.state.dataSource}
 
         renderRow={(rowData) =>
 
        <View style={styles.MainContainer}>
 
            <Text style={styles.textViewContainer} >{rowData.vardas}</Text>
              <Text style={styles.textViewContainer} >{rowData.pavarde}</Text>
              <Text style={styles.textViewContainer} >{rowData.gimtadienis}</Text>
              <Image source = {{uri :rowData.nuotrauka}} style={styles.foto}/>

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
           margin: 80,
           borderRadius : 10,
           padding: 50,
           

           },
           textViewContainer: {
            marginLeft: 120,
             width:'50%', 
             padding: 20,
             color: '#000000',
             bottom: 0,
             paddingTop: '10%',
             fontSize: 20,
           },
           foto: {
            marginLeft: 100,
               width: '50%',
               height: 150,
           },
           button: {
            justifyContent:'center',
            alignItems: 'center',
            paddingTop: 55,
            margin: 5,  
        }
           });
            