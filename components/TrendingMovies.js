import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import { image500 } from '../api/moviedb';

var {width, height} = Dimensions.get('window');


export default function TrendingMovies({data}) {
    const navigation = useNavigation();

    const handleClick = item =>{
        navigation.navigate('Movie', item);
    }
  return (
    <View className="mb-8 mt-10">
        {/* <View className="items-center">
            <Text className="font-bold text-white text-xl mx-4 mt-5 mb-5">Trending Movies</Text>
        </View> */}
      <Carousel
            data={data}
            renderItem={({item})=> <MovieCard handleClick={handleClick} item={item} />
            }
            firstItem={1}
            // loop={true}
            // inactiveSlideScale={0.86}
            inactiveSlideOpacity={0.60}
            sliderWidth={width}
            itemWidth={width*0.72}
            slideStyle={{display: 'flex', alignItems: 'center'}}
        />
    </View>
  )
}

const MovieCard = ({item, handleClick})=>{
    return (
        <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
            <View className="space-y-1 mr-4">
            <Image 
                source={{uri: image500(item.poster_path)}} 
                style={{
                    width: width * 0.7,
                    height: height * 0.5
                }}
                className="rounded-3xl" 
            />
            <View className="flex-1 items-center text-center">
                <Text className="text-2xl text-neutral-100 font-bold ml-1">
                {
                    item.original_title.length>20? item.original_title.slice(0,20)+'...': item.original_title
                }
                </Text>
            </View>
            </View>
        </TouchableWithoutFeedback>
    )
}