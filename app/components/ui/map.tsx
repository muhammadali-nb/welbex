import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import Parking from "../../icons/parking";

interface IMap {
	lnt: number;
	lng: number;
	scroll?: boolean;
	zoom?: boolean;
	parkings?: object[];
}

const Map = (props: IMap) => {
	const { scroll, zoom, lnt, lng, parkings } = props;

	return (
		<MapView
			style={tw`w-full h-full `}
			initialRegion={{
				latitude: lnt,
				longitude: lng,
				latitudeDelta: 0.1922,
				longitudeDelta: 0.0421,
			}}
			showsMyLocationButton={false}
			showsPointsOfInterest={false}
			showsCompass={false}
			showsScale={false}
			zoomControlEnabled={false}
			scrollEnabled={scroll}
			zoomEnabled={zoom}>
			<Marker title="My car" coordinate={{ latitude: lnt, longitude: lng }} />
			{parkings &&
				parkings.map((item: any) => (
					<Marker

						key={item.title}
						title={item.title}
						coordinate={{ latitude: item.lat, longitude: item.lng }}>
						<Parking width={30} height={30} />
					</Marker>
				))}
		</MapView>
	);
};

export default Map;
