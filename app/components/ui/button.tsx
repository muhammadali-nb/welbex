import React, { ReactElement } from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { colors } from "../../consts/colors";

interface IButton {
	title: string;
	style?: object;
	icon?: ReactElement;
	onPress?: () => void;
}

const Button = (props: IButton) => {
	const { title, style, icon, onPress } = props;

	return (
		<TouchableOpacity
			style={{
				...tw`min-w-24 max-w-32 bg-[${colors.dark.bg.main}] px-4 py-2 rounded-lg flex flex-row justify-center`,
				...style,
			}}
			onPress={onPress}>
			{icon}
			<Text
				style={tw`text-[${colors.dark.text.white}] font-medium ${
					icon ? "ml-2" : "ml-0"
				} `}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
