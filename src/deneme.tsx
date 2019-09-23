import React from 'react'
import {Text,View,StyleProp,ViewStyle} from 'react-native'
const deneme = (props:denemeInterface) => {
    return(
        <View style={props.style}>
            <Text>{props.name}</Text>
        </View>
    )
};
interface denemeInterface{
    style?:StyleProp<ViewStyle>
    name:string
}
export default deneme;
