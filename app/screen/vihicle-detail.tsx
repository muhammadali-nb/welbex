import React, { useEffect, useState } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";

import Button from "../components/ui/button";
import VihicleDetailLayout from "../components/layout/vihicle-detail-layout";

import tw from "twrnc";
import { colors } from "../consts/colors";

import Phone from "../icons/phone";
import Message from "../icons/message";
import Map from "../components/ui/map";

import { RootStackScreenProps, StackScreenProps } from "../navigation";
import { useNavigation } from "@react-navigation/native";
import { User } from "../types";

const VehicleDetail = ({ route }: StackScreenProps) => {
	const [vihicle, setVihicle] = useState<User>();
	const [loading, setLoading] = useState<boolean>(true);
	const navigation = useNavigation<RootStackScreenProps<"VehicleDetail">>();

	const initiateWhatsApp = () => {
		// Check for perfect 10 digit length

		// Using 91 for India
		// You can change 91 with your country code
		Linking.openURL("whatsapp://send?text=" + "" + `&phone=${vihicle?.phone}`);
	};

	const getVihicle = async () => {
		setLoading(true);
		try {
			const res = await fetch(
				//@ts-ignore
				`https://64a142c10079ce56e2daea83.mockapi.io/transports/${route.params.id}`,
				{
					method: "GET",
				}
			);
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			const data = await res.json();

			setVihicle(data);
		} catch (error) {
			console.log(error);
			alert(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getVihicle();
	}, []);

	return (
		<VihicleDetailLayout>
			<View style={tw`h-full w-full flex justify-center`}>
				{!loading && (
					<View
						style={tw`bg-[${colors.dark.bg.secondary}] rounded-xl py-3 px-3 `}>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("MapPage", {
									address: vihicle?.address,
									driver: vihicle?.name,
									car_id: vihicle?.car_id,
								})
							}
							style={tw`h-68 w-full rounded-lg overflow-hidden `}>
							<Map
								lnt={vihicle?.address.lat}
								lng={vihicle?.address.lng}
								zoom={false}
								scroll={false}
							/>
						</TouchableOpacity>
						<Text
							style={tw`text-[${colors.dark.text.white}] font-semibold text-xl mt-3 `}>
							Category: {vihicle?.category}
						</Text>
						<Text
							style={tw`text-[${colors.dark.text.white}] font-semibold text-xl`}>
							Driver: {vihicle?.name}
						</Text>
						<Text
							style={tw`text-[${colors.dark.text.white}] font-semibold text-xl`}>
							Contact: {vihicle?.phone}
						</Text>
						<Text
							style={tw`text-[${colors.dark.text.white}] font-semibold text-xl`}>
							id: {vihicle?.car_id}
						</Text>
						<View style={tw`flex flex-row mt-3`}>
							<Button
								icon={<Phone width={20} height={20} />}
								title="Phone"
								style={tw`mr-2 w-46 bg-green-600 py-3`}
							/>
							<Button
								onPress={initiateWhatsApp}
								style={tw` w-46 bg-purple-600 py-3 `}
								icon={<Message width={20} height={20} />}
								title="Message"
							/>
						</View>
					</View>
				)}
			</View>
		</VihicleDetailLayout>
	);
};

export default VehicleDetail;
