import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function Parking(props: any) {
	return (
		<Svg
			fill="#000"
		
			viewBox="0 0 24.00 24.00"
			data-name="Flat Color"
			xmlns="http://www.w3.org/2000/svg"
			className="icon flat-color"
			stroke="#000"
			strokeWidth={0.00024000000000000003}
			{...props}>
			<Circle cx={12} cy={12} r={10} fill="#000" />
			<Path
				d="M10 17a1 1 0 01-1-1V8a1 1 0 011-1h3.5a3.5 3.5 0 010 7H11v2a1 1 0 01-1 1zm1-5h2.5a1.5 1.5 0 000-3H11z"
				fill="#3349fd"
			/>
		</Svg>
	);
}

export default Parking;
