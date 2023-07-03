import React from "react";
import HomeLayout from "../components/layout/home-layout";
import HomeVihicleList from "../components/section/home/home-vehicle-list";

const Home = () => {
	return (
		<HomeLayout>
			<HomeVihicleList />
		</HomeLayout>
	);
};

export default Home;
