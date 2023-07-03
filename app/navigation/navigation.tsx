import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./index";

import Home from "../screen/home";
import Settings from "../screen/settings";

import { colors } from "../consts/colors";
import VehicleDetail from "../screen/vihicle-detail";
import MapPage from "../screen/map";

const Navigation = () => {
	const Stack = createNativeStackNavigator<RootStackParamList>();

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: colors.dark.bg.main },
				}}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="VehicleDetail" component={VehicleDetail} />
				<Stack.Screen name="MapPage" component={MapPage} />

				<Stack.Screen name="Settings" component={Settings} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
