import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CloseIcon = () => (
    <Svg width={24} height={24} fill="none">
        <Path
            stroke="#AFB2BF"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M15 1 1 15M1 1l14 14"
        />
    </Svg>
);
export default CloseIcon;
