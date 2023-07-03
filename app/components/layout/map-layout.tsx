import React from "react";
import { Text, View } from "react-native";
import Layout, { ILayout } from "./layout";
import tw from "twrnc";
import { colors } from "../../consts/colors";
import Back from "../../icons/back";
import GoBack from "../ui/go-back";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigation";

const MapLayout = ({ children }: ILayout) => {
	const navigation = useNavigation<RootStackScreenProps<"MapPage">>();

	return (
		<Layout style={tw`relative`}>
			<GoBack
				style={tw`absolute top-12 left-3 `}
				onPress={() => navigation.goBack()}
			/>

				{children}

			
		</Layout>
	);
};

export default MapLayout;
