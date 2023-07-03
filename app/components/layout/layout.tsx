import React, { ReactNode } from "react";
import { View } from "react-native";

import tw from "twrnc";

export interface ILayout {
	children: ReactNode;
	style?: object;
}

const Layout = ({ children, style }: ILayout) => {
	return <View style={{ ...tw`pt-10`, ...style }}>{children}</View>;
};

export default Layout;
