import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { PencilSquareIcon, UserCircleIcon } from 'react-native-heroicons/outline';

export default function UserScreen() {
    return (
        <View className="bg-neutral-900 flex-1">
          <View className="flex-1 items-center mt-10 mx-4 mb-10">
          <Text className="font-bold text-white text-3xl mt-5">Profile</Text>

          <View className="my-10" >
          <UserCircleIcon color="red" size="80"/>
          </View>

          <TextInput className="w-full"
          style={{
            backgroundColor: 'gray',
            paddingHorizontal: 10,
            paddingVertical: 16,
            fontSize: 16,
            borderRadius: 8,
            marginBottom: 6,
          }}
          placeholder="Enter email"
        />
        <TextInput className="w-full"
          style={{
            borderWidth: 1,
            backgroundColor: 'gray',
            paddingHorizontal: 10,
            paddingVertical: 16,
            fontSize: 16,
            borderRadius: 8,
          }}
          placeholder="Enter password"
        />
          {/* Personal button */}
          <TouchableOpacity className="flex-row justify-center rounded-xl mt-10 pt-3 pb-3 w-60 bg-red-700 items-center">
            <PencilSquareIcon color={'white'}/>
            <Text className="ml-2 text-white text-lg">Update profile</Text>
          </TouchableOpacity>
          </View>
          <NavigationBar/>
      </View>
    )
}