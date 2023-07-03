import React, { ReactNode } from "react";

import Header from "../section/global/header";
import Layout, { ILayout } from "./layout";
import { ScrollView, View } from "react-native";

const HomeLayout = ({ children }: ILayout) => {
	return (
		<Layout>
			<ScrollView>
				<Header title={"Vihivles list"} />
				{children}
			</ScrollView>
		</Layout>
	);
};

export default HomeLayout;
