import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const HeadBodyText_new = (props: HeadBodyTextProps) => {
    return (
        <View style={styles(null, null, props.locationX, props.locationY,null).container}>
            <Text style={styles(props.fontSize, props.textcolor, null, null,props.TextmarginTop).headtext}>{props.text}</Text>
        </View>
    )
};
interface HeadBodyTextProps {
    fontSize: number,
    text: string;
    textcolor: string;
    locationX: string;
    locationY: string;
    TextmarginTop: number,
}
const styles = (fontSize, textcolor, locationX, locationY,marginTop) => StyleSheet.create({
    container: {
        flex: 8,
        width: "100%",
        alignItems: locationX,
        justifyContent: locationY
    },
    headtext: {
        marginTop: marginTop,
        color: textcolor,
        fontWeight: "bold",
        fontSize: fontSize,
    }

});
export default HeadBodyText_new;