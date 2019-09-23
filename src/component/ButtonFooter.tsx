import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View ,Image} from 'react-native';
const ButtonFooter = (props: ButtonFooterProps) => {
    return (
        <View style={styles(props.btnfooterbgColor).container}>
            <TouchableOpacity
                style={styles(null).touch}>
                <Image
                    source={props.btnfooterimgSource}
                    style={styles(null).img}
                />
            </TouchableOpacity>
        </View>
    )
};
interface ButtonFooterProps {
    btnfooterbgColor: string;
    btnfooterimgSource: number,
}
const styles = (btnfooterbgColor) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: btnfooterbgColor
    },
    touch : {
        flex:1,
        alignItems: "center",
        justifyContent: "center",

    },
    img:{
        flex:1,
        width: 200,
        height: 200,
        resizeMode: 'center',
        marginTop:8,
        marginBottom:8
    }
});
export default ButtonFooter;