import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList'
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb'
import Loading from '../components/Loading'
import NavigationBar from '../components/NavigationBar';


// PLATFORM CHECK
const ios = Platform.OS == 'ios'
let appLoaded = false

export default function HomeScreen() {

  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    getTrendingMovies();
    appLoaded = true
  },[]);

  const getTrendingMovies = async ()=>{
    const data = await fetchTrendingMovies();
    console.log('got trending', data.results.length, data.results)
    if(data && data.results) setTrending(data);
    setLoading(false)
  }

  return (
    <View className="flex-1">
      { appLoaded ? 
      <View className="flex-1 bg-neutral-900">

      <SafeAreaView className={`ios ? "mb-4" : "-mb-3" flex-1`}>
      <ScrollView showsVerticalScrollIndicator={false} 
          contentContainerStyle={{paddingBottom: 10}}>
            <TrendingMovies data={trending.results}></TrendingMovies>
      </ScrollView>
      </SafeAreaView>
  </View>
  : 
   <Loading/>
   }
    <NavigationBar/>
    </View>
  );
}
