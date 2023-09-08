import { Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React, { Component, useEffect } from 'react'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon, HomeIcon, HeartIcon, UserIcon, TableCellsIcon } from 'react-native-heroicons/outline'
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../theme';
const ios = Platform.OS == 'ios'

export default function NavigationBar(){
    const route = useRoute();
    
    const navigation = useNavigation();
    const currentScreen = route.name;

    return (
        <View className="border-t border-neutral-700 bg-neutral-900 w-full flex-row items-center h-24">
        <SafeAreaView className={`ios ? "mb-4" : "-mb-3"`}>
          <View className="flex-row mx-4">
            <View className="flex-row justify-between items-center w-full">
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <HomeIcon size="28" strokeWidth={2} color={currentScreen === 'Home' ? 'red' : 'grey'} />
              </TouchableOpacity>
      
              <TouchableOpacity onPress={() => navigation.navigate('ListsOfMovies')}>
                <TableCellsIcon size="28" strokeWidth={2} color={currentScreen === 'ListsOfMovies' ? 'red' : 'grey'} />
              </TouchableOpacity>
      
              <TouchableOpacity>
                <HeartIcon size="28" onPress={() => navigation.navigate('Favourite')} strokeWidth={2} color={currentScreen === 'Favourite' ? 'red' : 'grey'}/>
              </TouchableOpacity>
      
              <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <MagnifyingGlassIcon size="28" strokeWidth={2} color={currentScreen === 'Search' ? 'red' : 'grey'} />
              </TouchableOpacity>
      
              <TouchableOpacity onPress={() => navigation.navigate('UserScreen')}>
                <UserIcon size="28" strokeWidth={2} color={currentScreen === 'UserScreen' ? 'red' : 'grey'} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
      
    )
}