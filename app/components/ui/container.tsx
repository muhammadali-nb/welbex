import React, { ReactNode } from "react";
import { View } from "react-native";
import tw from "twrnc";

const Container = ({ children }: { children: ReactNode }) => {
	return <View style={tw`px-4`}>{children}</View>;
};

export default Container;
