interface TextContentProps {
    text : string;

}
import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
const TextContent_new = (props:TextContentProps)  => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 9,
        color: "black",

    },
    container: {

        flex: 3,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        marginTop: 15,

    },
});
export default TextContent_new;