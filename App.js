import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight, Animated } from 'react-native';
// import Cat from './assets/cat.png'


export default class Cat extends Component {
  state = {
    url: 'https://images-ra.adoptapet.com/images/Homepage-Cat-MOBILE.png'
  };

  // componentDidMount(){
  //   fetch('https://api.thecatapi.com/v1/images/search')
  //   .then(resp => resp.json())
  //   .then(obj => {
  //     this.setState({
  //     url: obj[0].url
  //   })})
  // }

  moreCat = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(obj => {
      this.setState({
      url: obj[0].url
    })})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>I like Big Cats!</Text>
        <TouchableHighlight onPress={this.moreCat} >
        <Image style={styles.image}
            source={{uri:this.state.url}}
          />
        </TouchableHighlight>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADBD8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontSize: 30,
    color: 'white',
  },
  image:{
    width:300,
    height:200,
    borderWidth: 5,
    borderColor: '#f0f'
  }
});
