import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path, G, Defs, Rect, ClipPath, Mask, Line, Circle, Polygon } from "react-native-svg"
import { SvgProps } from '../Interface';

export const SvgComponent = function (props: SvgProps) {
    let svg : any;
    let color: string;

    switch(props.name) {
        case "dots":
            svg =
                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
                    <Path d="M8.90625 4.51172C8.90625 4.8018 9.02148 5.08 9.2266 5.28512C9.43172 5.49023 9.70992 5.60547 10 5.60547C10.2901 5.60547 10.5683 5.49023 10.7734 5.28512C10.9785 5.08 11.0938 4.8018 11.0938 4.51172C11.0938 4.22164 10.9785 3.94344 10.7734 3.73832C10.5683 3.5332 10.2901 3.41797 10 3.41797C9.70992 3.41797 9.43172 3.5332 9.2266 3.73832C9.02148 3.94344 8.90625 4.22164 8.90625 4.51172ZM8.90625 9.98047C8.90625 10.2705 9.02148 10.5487 9.2266 10.7539C9.43172 10.959 9.70992 11.0742 10 11.0742C10.2901 11.0742 10.5683 10.959 10.7734 10.7539C10.9785 10.5487 11.0938 10.2705 11.0938 9.98047C11.0938 9.69039 10.9785 9.41219 10.7734 9.20707C10.5683 9.00195 10.2901 8.88672 10 8.88672C9.70992 8.88672 9.43172 9.00195 9.2266 9.20707C9.02148 9.41219 8.90625 9.69039 8.90625 9.98047ZM8.90625 15.4492C8.90625 15.7393 9.02148 16.0175 9.2266 16.2226C9.43172 16.4277 9.70992 16.543 10 16.543C10.2901 16.543 10.5683 16.4277 10.7734 16.2226C10.9785 16.0175 11.0938 15.7393 11.0938 15.4492C11.0938 15.1591 10.9785 14.8809 10.7734 14.6758C10.5683 14.4707 10.2901 14.3555 10 14.3555C9.70992 14.3555 9.43172 14.4707 9.2266 14.6758C9.02148 14.8809 8.90625 15.1591 8.90625 15.4492Z" fill={props.color ? props.color: '#999999' }/>
                </Svg>
        break;
        case "hamburger":
            svg =
            <Svg width="21" height="15" viewBox="0 0 21 15" fill="none" style={[props.cssClass as StyleProp<ViewStyle>]}>
                <Circle cx="1.5" cy="1.5" r="1.5" fill="#858586"/>
                <Line x1="5" y1="1.5" x2="21" y2="1.5" stroke="#858586"/>
                <Circle cx="1.5" cy="7.5" r="1.5" fill="#858586"/>
                <Line x1="5" y1="7.5" x2="19" y2="7.5" stroke="#858586"/>
                <Circle cx="1.5" cy="13.5" r="1.5" fill="#858586"/>
                <Line x1="5" y1="13.5" x2="17" y2="13.5" stroke="#858586"/>
            </Svg>;
        break;
        case "more":
            svg =
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={[props.cssClass as StyleProp<ViewStyle>]}>
                <Path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#4B0082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#4B0082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#4B0082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>;
        break;
    }
    return (
      <>
          {svg}
      </>
    );
}  