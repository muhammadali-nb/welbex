import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { colors } from "../../../consts/colors";
import Container from "../../ui/container";

interface IHeader {
	title: string;
}

const Header = (props: IHeader) => {
	const { title } = props;
	return (
		<View>
			<Container>
				<View
					style={tw`bg-[${colors.dark.bg.secondary}] flex items-center py-3 rounded-lg`}>
					<Text style={tw`text-white text-xl font-medium`}>{title}</Text>
				</View>
			</Container>
		</View>
	);
};

export default Header;
