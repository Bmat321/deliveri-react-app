import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBasketItems,
  removeFromBasket,
  selectBasketItemsTotal,
} from "../featureSlice/basketSlice";
import { selectResturant } from "../featureSlice/resturantSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketItemsTotal);
  const resturant = useSelector(selectResturant);
  const dispatch = useDispatch();
  const [groupItemsInBasket, setGroupItemInBasket] = useState([]);

  useMemo(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupItemInBasket(groupItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg text-center font-bold">Basket</Text>
            <Text className="text-center text-gray-400">{resturant.title}</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 my-5 bg-white">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <Text className="flex-1">Deliver in 50 - 75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center bg-white space-x-3 py-3 px-5"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>

              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="USD" />
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-[#00CCBB]">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delvery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className=" font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="USD" />
            </Text>
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate('PreparingOrderScreen')} className='bg-[#00CCBB] rounded-lg p-4'>
            <Text className='text-center text-white text-lg font-bold '>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
