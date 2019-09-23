import LinearGradient from "react-native-linear-gradient";

interface HeadGradientProps {
    colors: any;
    borderColor: string;
}
import React from 'react';
import {StyleSheet} from 'react-native';
const HeadGradient_new = (props:HeadGradientProps)  => {
    return(
        <LinearGradient
            start={{x: 0, y: -1}} end={{x: 1, y: -1}}
            colors={props.colors}
            style={styles(props.borderColor).headView}
            locations={[0,0.5,0.8]}
        >
        </LinearGradient>
    )
};
const styles = (borderColor) => StyleSheet.create({
    headView: {
        position: "absolute",
        width: "210%",
        height: "210%",
        borderWidth: 15,
        borderColor: borderColor,
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        top: "-110%",
    },
});


export default HeadGradient_new;