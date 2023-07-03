import React, { useEffect, useState } from "react";
import { View } from "react-native";

import tw from "twrnc";
import { colors } from "../../../consts/colors";

import DropDownPicker from "react-native-dropdown-picker";
import VehicleCard from "../../ui/vihicle-card";
import Container from "../../ui/container";

function HomeVihicleList() {
	const [dropdownActive, setDropdownActive] = useState(false);
	const [vihicleList, setVihicleList] = useState<object[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const [value, setValue] = useState(null);
	const [items, setItems] = useState([
		{ label: "Passenger auto", value: "Passenger" },
		{ label: "Cargo auto", value: "Cargo" },
		{ label: "Special auto", value: "Special" },
	]);

	const getVihicles = async () => {
		setLoading(true);
		try {
			const res = await fetch(
				"https://64a142c10079ce56e2daea83.mockapi.io/transports",
				{
					method: "GET",
				}
			);
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			const data = await res.json();

			setVihicleList(data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getVihicles();
	}, []);

	return (
		<View style={tw`pt-5`}>
			<Container>
				<View>
					<DropDownPicker
						listMode="MODAL"
						mode="BADGE"
						theme="DARK"
						style={tw` bg-[${colors.dark.bg.secondary}] text-white z-50 `}
						open={dropdownActive}
						value={value}
						items={items}
						setOpen={setDropdownActive}
						setValue={setValue}
						setItems={setItems}
					/>
					<View style={tw`my-3 `}>
						{!loading &&
							vihicleList
								.filter((_item: any) =>
									value ? _item?.category === value : _item
								)
								.map((item: any) => (
									<VehicleCard
										key={item.id}
										style={tw`mb-3`}
										driver={item.name}
										type={item.category}
										car_id={item.car_id}
										id={item.id}
										address={item.address}
									/>
								))}
					</View>
				</View>
			</Container>
		</View>
	);
}

export default HomeVihicleList;
