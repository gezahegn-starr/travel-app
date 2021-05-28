import React from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import {shadow} from '../shared/global'

import {colors} from '../shared/global'

export default function Header(){
  return (
    <View style={styles.header}>
      <Image
      source={require('../../assets/images/profile.png')}
      style={styles.profileImage}/>
      <Image
      style={styles.bell}
      source={require('../../assets/icons/bell.png')}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  header:{
    height: '100%',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection: 'row',
    width: 317
  },
  profileImage:{
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor:'lightgrey',
    ...shadow
  },
  bell:{
    height: 35,
    width: 35,
    borderRadius: 100,
  }
})
