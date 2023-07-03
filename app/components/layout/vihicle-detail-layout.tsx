import React from "react";
import Layout, { ILayout } from "./layout";
import Container from "../ui/container";
import { View } from "react-native";


const VihicleDetailLayout = ({ children }: ILayout) => {
	return (
		<Layout>

				<Container>{children}</Container>

		</Layout>
	);
};

export default VihicleDetailLayout;
