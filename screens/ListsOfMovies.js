import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import MovieList from '../components/MovieList'
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { fetchTopRatedMovies, fetchUpcomingMovies, fetchNowPlayingMovies } from '../api/moviedb'
import Loading from '../components/Loading'
import NavigationBar from '../components/NavigationBar';


// PLATFORM CHECK
const ios = Platform.OS == 'ios'
let appLoaded = false

export default function ListsOfMovies() {
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    getUpcomingMovies();
    getTopRatedMovies();
    getNowPlayingMovies();
    appLoaded = true
  },[]);

  const getUpcomingMovies = async ()=>{
    const data = await fetchUpcomingMovies();
    console.log('got upcoming', data.results.length)
    if(data && data.results) setUpcoming(data.results);
  }
  const getTopRatedMovies = async ()=>{
    const data = await fetchTopRatedMovies();
    console.log('got top rated', data.results.length)
    if(data && data.results) setTopRated(data.results);
  }
  const getNowPlayingMovies = async ()=>{
    const data = await fetchNowPlayingMovies();
    console.log('got now playing', data.results.length)
    if(data && data.results) setNowPlaying(data.results);
  }

  return (
    <View className="flex-1">
      { appLoaded ? 
      <View className="flex-1 bg-neutral-900">
      <SafeAreaView className={`ios ? "mb-4" : "-mb-3" flex-1`}>
      <ScrollView showsVerticalScrollIndicator={false} 
          contentContainerStyle={{paddingBottom: 10}}>
            <MovieList title="Upcoming" data={upcoming}></MovieList>
            <MovieList title="Top Rated" data={topRated}></MovieList>
            <MovieList title="Now Playing" data={nowPlaying}></MovieList>
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
