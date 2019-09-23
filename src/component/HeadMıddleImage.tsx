interface HeadMiddleImageProps {
    MiddleimgSource : number,
    MiddlelocationX : string,
    MiddlelocationY : string,
    Middlewidth : number,
    Middleheight : number,
}
import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

const HeadMiddleImage_new = (props:HeadMiddleImageProps)  => {
    return(
        <View style={styles(props.MiddlelocationX,props.MiddlelocationY,null,null).container}>
            <Image
                source={props.MiddleimgSource}
                style={styles(null,null,props.Middlewidth,props.Middleheight).img}
            />
        </View>
    )
};

const styles =(MiddlelocationX,MiddlelocationY,Middlewidth,Middleheight) => StyleSheet.create({
    container: {
        flex: 2,
        alignItems: MiddlelocationX,
        justifyContent: MiddlelocationY
    },
    img : {
        width: Middlewidth,
        height: Middleheight,
        resizeMode: 'center',
    }
});

export default HeadMiddleImage_new;