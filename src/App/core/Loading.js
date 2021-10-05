import React from 'react'
import { View, ActivityIndicator } from 'react-native'

export default function Loading () {
  return (
    <View style={{ height: '100%', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#5ebf94" />
    </View>
  )
}