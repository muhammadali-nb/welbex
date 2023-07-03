import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import Back from "../../icons/back";
import { colors } from "../../consts/colors";

interface GoBack {
	style?: object;
	onPress: () => void;
}

const GoBack = (props: GoBack) => {
	const { style, onPress } = props;

	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				...tw`bg-[${colors.dark.bg.main}] z-50 pr-5 pl-3.7  py-2 rounded-md flex flex-row items-center `,
				...style,
			}}>
			<Back width={18} height={20} />
			<Text style={tw`text-[${colors.dark.text.white}] ml-2 font-medium`}>
				Back
			</Text>
		</TouchableOpacity>
	);
};

export default GoBack;
