import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { urlFor } from "../sanity";
import {
  MapPinIcon,
  StarIcon,
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems } from "../featureSlice/basketSlice";
import { setResturant } from "../featureSlice/resturantSlice";

const ResturantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      title,
      genre,
      short_description,
      rating,
      long,
      lat,
      address,
      dishes,
    },
  } = useRoute();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setResturant({
        id,
        imgUrl,
        title,
        genre,
        short_description,
        rating,
        long,
        lat,
        address,
        dishes,
      })
    );
  }, [dispatch]);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-200 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={22} color="#00CCBB" opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon size={22} color="#00CCBB" opacity={0.4} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-gray-500">Nearby . {address}</Text>
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4 ">
              {short_description}
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon size={22} color="gray" opacity={0.6} />
            <Text className="pl-2 text-md flex-1 font-bold">
              Have a food gallery ?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="mx-4 pt-6 mb-3 text-xl font-bold">Menu</Text>
          {dishes.map((dish) => (
            <View key={dish._id}>
              <DishRow
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default ResturantScreen;
