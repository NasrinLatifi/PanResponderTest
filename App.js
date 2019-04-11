import React, { Component } from 'react';
import {
   StyleSheet,
   View
} from 'react-native';

import Ball from './src/Ball'
export default class App extends Component {
   render() {
      return (
         <View style={styles.container}>
            <Ball/>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
   }
});
