import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import { XIcon, XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectResturant } from "../featureSlice/resturantSlice";
import * as Progress from "react-native-progress";
import * as React from "react";
import MapView, { Marker } from "react-native-maps";


const DeliveryScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md z-50 p-6 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">44 - 55 minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="w-20 h-20"
            />
          </View>
          <Progress.Bar size={60} indeterminate={true} color="#00CCBB" />

          <Text className="mt-3 text-gray-500">
            Your order for {resturant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          longitude: resturant.long,
          latitude: resturant.lat,
          longitudeDelta: 0.005,
          latitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            longitude: resturant.long,
            latitude: resturant.lat,
          }}
          title={resturant.title}
          description={resturant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView className='flex-row h-28 bg-white items-center space-x-2'>
      <Image
              source={{
                uri: "https://links.papareact.com/wru",
              }}
              className="w-12 h-12 bg-gray-300 rounded-full ml-5 p-4"
            />
            <View className='flex-1'>
              <Text className='text-lg'>Bmat</Text>
              <Text className='text-gray-400'>Your Rider</Text>
            </View>
            <Text className='mr-5 font-bold text-[#00CCBB] text-lg'>Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
