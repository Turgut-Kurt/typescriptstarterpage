import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const HeadBodyImage_new = (props: HeadBodyImageProps) => {
    return (
        <View style={styles(props.locationX, props.locationY).main}>
            <View style={styles(null, null).frame}>
                <Image
                    source={props.imgSource}
                    style={styles(null, null).img}
                />
            </View>
        </View>
    )
};
interface HeadBodyImageProps {
    imgSource: any;
    locationX: string;
    locationY: string;
}
const styles = (locationX, locationY) => StyleSheet.create({
    main: {
        flex: 20,
        flexDirection: "column",
        alignItems: locationX,
        justifyContent: locationY,
        width: "100%",
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 45,
        resizeMode: "cover",
    },
    frame: {
        alignItems: "center",
        justifyContent: "center",
        width: 120,
        height: 120,
        borderWidth: 10,
        borderColor: '#2187FF',
        borderRadius: 60,
    },
    text: {
        fontWeight: "bold",
        color: "white"
    }
});
export default HeadBodyImage_new;