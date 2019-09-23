interface HeadBodyImage2Props {
    imgSource: any,
    locationX: string,
    locationY: string,
    width: number,
    height: number,
    marginLeft: number,
    marginTop:number,
}
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const HeadBodyImage2_new = (props:HeadBodyImage2Props)  => {
    return(
        <View style={styles(props.locationX, props.locationY,null,null,null,null).main}>
            <Image
                source={props.imgSource}
                style={styles(null, null,props.width,props.height,props.marginLeft,props.marginTop).img}

            />
        </View>
    )
};
const styles = (locationX, locationY,width,height,marginLeft,marginTop) => StyleSheet.create({
    main: {
        flex: 20,
        flexDirection: "column",
        alignItems: locationX,
        justifyContent: locationY,
        width: "100%",
    },
    img: {
        marginTop:marginTop,
        width: width,
        height: height,
        resizeMode: "stretch",
        marginLeft:marginLeft,

    },

});


export default HeadBodyImage2_new;