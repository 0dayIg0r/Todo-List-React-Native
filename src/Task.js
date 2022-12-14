import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'


export default function Task({ data, deleteTask}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={deleteTask}>
        <FontAwesome name='trash' size={25} color='#22272E' />
      </TouchableOpacity>
      <Text>
        {data.item}
      </Text>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(196, 196, 196, 0.20)',
    marginTop: 12,
    padding: 12,
    borderRadius: 4,
    flexDirection: 'row',

  },
  button: {
    marginRight: 8,
  }
})