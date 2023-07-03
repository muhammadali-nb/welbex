import React, { useEffect } from "react";
import Map from "../components/ui/map";
import MapLayout from "../components/layout/map-layout";
import { StackScreenProps } from "../navigation";
import { Text, View } from "react-native";
import { colors } from "../consts/colors";
import tw from "twrnc";
const MapPage = ({ route }: StackScreenProps) => {
	//@ts-ignore
	const { address, car_id, driver } = route.params;

	useEffect(() => {
		log(address);
	}, [address]);

	return (
		<MapLayout>
			<View style={tw`h-[90%]`}>
				<Map
					lnt={address?.lat}
					lng={address?.lng}
					parkings={address.parkings}
				/>
			</View>
			<View style={tw`h-[10%] bg-[${colors.dark.bg.main}] px-5 w-full py-3 `}>
				<Text
					style={tw`text-[${colors.dark.text.white}] font-semibold text-xl`}>
					ID: {car_id}
				</Text>
				<Text
					style={tw`text-[${colors.dark.text.white}] font-semibold text-xl mt-1`}>
					Driver: {driver}
				</Text>
			</View>
		</MapLayout>
	);
};

export default MapPage;
