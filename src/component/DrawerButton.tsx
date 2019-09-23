import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const DrawerButton_new = (props:DrawerButtonProps)  => {
    return(
        <TouchableOpacity
            style={styles(props.drawerlocationX,props.drawerlocationY).container}>
            <Icon
                size={props.drawersize}
                name={props.drawername}
                color={props.drawercolor}
                onPress={props.headfunc}
            />
        </TouchableOpacity>
    )
};
interface DrawerButtonProps {
    drawersize : number,
    drawername : string,
    drawercolor : string,
    drawerlocationX : string,
    drawerlocationY : string,
    headfunc : any,
}
const styles = (drawerlocationX,drawerlocationY) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: drawerlocationX,
        justifyContent: drawerlocationY,
    },
});
export default DrawerButton_new;