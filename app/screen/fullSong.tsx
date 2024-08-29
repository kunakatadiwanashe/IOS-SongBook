import { View, Text } from 'react-native'
import React from 'react'
import songs from '@/assets/consts/songs'

const fullSong = ({songs}) => {
  return (
    <View>
    <Text >{songs.id}</Text>
        <View >
          <Text >{songs.name} </Text>
          <Text >{songs.nameEng}</Text>
          <Text >{songs.writer}</Text>
          <Text >{songs.fullsong}</Text>
       </View>
    </View>
  )
}

export default fullSong