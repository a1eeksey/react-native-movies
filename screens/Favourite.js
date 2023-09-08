import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MovieList from '../components/MovieList'
import Cast from '../components/Cast'
import { favouriteMovies } from '../screens/MovieScreen'
import TrendingMovies from '../components/TrendingMovies'
import NavigationBar from '../components/NavigationBar'

export default function Favourite() {
  return (
    <View className="flex-1 bg-neutral-900">
        <ScrollView 
        contentContainerStyle={{paddingBottom: 20}} 
        className="mt-12 flex-1 bg-neutral-900">
            <Text className="font-bold ml-4 text-white text-2xl">Favorite</Text>

            {favouriteMovies ? 
            <TrendingMovies data={favouriteMovies}/>
            : <Text className="font-bold text-white text-xl">No Favorite films yet</Text>
            }
        </ScrollView>
        <NavigationBar/>
    </View>
  )
}