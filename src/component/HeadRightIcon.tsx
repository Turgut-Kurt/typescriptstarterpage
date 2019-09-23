
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';

const HeadRightIcon_new = (props: HeadRightIconProps) => {
    return (
        <TouchableOpacity
            style={styles(null, null, null, null).container}>

            <View style={styles(props.locationX, props.locationY, null, null).container}>
                <Image
                    source={props.imgSource}
                    style={styles(null, null, props.Rightwidth, props.Rightheight).img}

                />
            </View>
        </TouchableOpacity>
    )
};

interface HeadRightIconProps {
    imgSource: number
    locationX: string
    locationY: string
    Rightwidth: number
    Rightheight: number
}

const styles = (locationX, locationY,Rightwidth,Rightheight) => StyleSheet.create({
    container: {

        flex: 1,
        alignItems: locationX,
        justifyContent: locationY
    },
    img: {
        width: Rightwidth,
        height: Rightheight,
        resizeMode: 'center',
    }
});
export default HeadRightIcon_new;