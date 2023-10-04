import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    title:string,
    position?: 'br' | 'bl',
    onPress: () => void;
}

const Fab = ({title, onPress, position = 'br'}:Props) => {


  const ios = () => {
    return(
        <TouchableOpacity
            style={
                (position === 'bl')
                ? styles.fabLocationBl
                : styles.fabLocationBR
            }
            onPress={onPress}
        >
            <View style={styles.fab}
            >
            <Text style={styles.fabText}>{title} Ios</Text>
            </View>
        </TouchableOpacity>
    )
  } 
  
  const android = () => {
    return(
        <TouchableOpacity
            style={
                (position === 'bl')
                ? styles.fabLocationBl
                : styles.fabLocationBR
            }
            onPress={onPress}
        >
            <View style={styles.fab}
            >
            <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
  }


  return (Platform.OS === 'ios') ? ios() : android()
}

const styles = StyleSheet.create({
    fabLocationBR:{
        position: 'absolute',
        bottom: 25,
        right: 25
      },
      fabLocationBl:{
        position: 'absolute',
        bottom: 25,
        left: 25
      },
      fab:{
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
      },
      fabText: {
        color:'#fff',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center'
      }
})

export default Fab
