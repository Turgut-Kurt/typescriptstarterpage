import DrawerButton_new from "./DrawerButton_new";
import React, {Component} from 'react';
import {StyleSheet, Text, View,ViewStyle} from 'react-native';
import DrawerButton from "./DrawerButton";
import HeadMiddleImage from "./HeadMiddleImage";
import HeadRightIcon from "./HeadRightIcon";
import HeadMiddleImage_new from "./HeadMıddleImage_new";
import HeadRightIcon_new from "./HeadRightIcon_new";
const HeadTop_new = (props:HeadTopProps)  => {
    return(
        <View style={styles.topheader}>
            <DrawerButton_new
                drawersize={40}
                drawername={props.drawername}
                drawercolor={"white"}
                drawerlocationX="flex-end"
                drawerlocationY="center"
                headfunc={props.headfunc}
            />
            <View style={styles.freeSpace1}></View>
            <View style={styles.freeSpace2}><Text></Text></View>
            <HeadMiddleImage_new
                MiddleimgSource={props.MiddleimgSource}
                MiddlelocationX="center"
                MiddlelocationY="flex-start"
                Middlewidth={props.Middlewidth}
                Middleheight={props.Middleheight}
            />
            <View style={styles.freeSpace2}><Text> </Text></View>
            <HeadRightIcon_new
                imgSource={require('../assets/1x/profile_human.png')}
                locationX="center"
                locationY="center"
                Rightwidth={30}
                Rightheight={30}
            />
            <HeadRightIcon_new
                imgSource={require('../assets/1x/turn-notifications-on-button.png')}
                locationX="center"
                locationY="center"
                Rightwidth={30}
                Rightheight={30}
            />
        </View>
    )
};
interface HeadTopProps {
    Middlewidth :number,
    Middleheight :number,
    MiddleimgSource:any,
    drawername:string,
    headfunc : any,
}
const styles = StyleSheet.create({
    topheader: {
        flex: 8,
        flexDirection: "row",
    },
    freeSpace2: {
        flex: 2,
    },
    freeSpace1: {
        flex: 1,
    },
});

export default HeadTop_new;