import React, { useEffect } from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { colors } from "../../consts/colors";
import Button from "./button";
import PassangerAuto from "../../icons/passenger-auto";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigation";
import CargoAuto from "../../icons/cargo-auto";
import SpecialAuto from "../../icons/special-auto";

interface IVehicleCard {
	style?: object;
	type: string;
	driver: string;
	id: number;
	car_id: string;
	address: object;
}

const VehicleCard = (props: IVehicleCard) => {
	const { style, id, type, driver, car_id, address } = props;

	const navigation = useNavigation<RootStackScreenProps<"Home">>();

	const CategotyAutoIcon = () => {
		if (type.toLowerCase() === "passenger") {
			return <PassangerAuto width={50} height={40} />;
		} else if (type.toLowerCase() === "cargo") {
			return <CargoAuto width={50} height={40} />;
		} else {
			return <SpecialAuto width={50} height={40} />;
		}
	};

	return (
		<View
			style={{
				...tw`bg-[${colors.dark.bg.secondary}] pt-4 pb-2 px-3 rounded-lg`,
				...style,
			}}>
			<Text style={tw`text-sm font-medium leading-4 text-white`}>Type:</Text>
			<View style={tw`flex flex-row items-center`}>
				{CategotyAutoIcon()}
				<Text
					style={tw`text-[${colors.dark.text.white}] text-base font-medium `}>
					{type}
				</Text>
			</View>
			<Text style={tw`text-[${colors.dark.text.white}] text-base font-medium `}>
				Driver name: {driver}
			</Text>
			<Text style={tw`text-[${colors.dark.text.white}] text-base font-medium `}>
				id: {car_id}
			</Text>
			<View style={tw`flex flex-row  mt-2`}>
				<Button
					onPress={() =>
						navigation.navigate("MapPage", { address, driver, car_id })
					}
					title="Show location"
				/>
				<Button
					title="More info"
					style={tw`ml-2`}
					onPress={() => navigation.navigate("VehicleDetail", { id })}
				/>
			</View>
		</View>
	);
};

export default VehicleCard;
