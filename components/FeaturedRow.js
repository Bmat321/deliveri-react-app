import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import ResturantCard from "./ResturantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [resturants, setResturants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type=='featured' && _id== $id]{
      ...,
      resturant[]->{
        ...,
        dishes[]->,
          type->{
            name
          }
      },
    }[0]
    `,
        { id }
      )
      .then((data) => setResturants(data?.resturant));
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        className="pt-4"
      >
        {resturants?.map((resturant) => (
          <ResturantCard
            key={resturant._id}
            id={resturant._id}
            imgUrl={resturant.image}
            title={resturant.name}
            genre={resturant.type?.name}
            short_description={resturant.short_description}
            rating={resturant.rating}
            dishes={resturant.dishes}
            long={resturant.long}
            lat={resturant.lat}
            address={resturant.address}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
