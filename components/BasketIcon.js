import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketItemsTotal,
} from "../featureSlice/basketSlice";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketItemsTotal);

  if(items.length === 0) return null

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate('Basket')} className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'>
        <Text className="bg-[#01A256] text-lg text-white font-extrabold py-1 px-2">{items.length}</Text>
        <Text className='flex-1  text-center text-lg text-white font-extrabold'>View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
