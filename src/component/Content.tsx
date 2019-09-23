import React from 'react';
import {StyleSheet, View,ViewStyle} from 'react-native';
import ImageContent from "./ImageContent";
import TextContent from "./TextContent";
import ButtonContent from "./ButtonContent";
const Content = (props:ContentProps) => {
    return(
        <View style={[styles.ImageContent, props.style]}>
            <ImageContent
                imgSource={props.imgSource}
                circlebg={props.circlebg}
                Imgwidth={props.Imgwidth}
                ImageMarginLeft={0}
                Imgheight={props.Imgheight}
                ImagelocationX={props.ImagelocationX}
                ImagelocationY={props.ImagelocationY}
                ImageMarginTop={props.ImageMarginTop}
            />
            <View style={styles.rightbuttonandtextcontent}>
                <TextContent
                    text={props.text}

                />
                <ButtonContent
                    btntext={props.btntext}
                    btnbgColor={props.btnbgColor}
                    btntextcolor={props.btntextcolor}
                    func={props.func}
                />
            </View>
        </View>
    )
};

interface ContentProps {
    ImagelocationX: String;
    ImagelocationY : String;
    Imgwidth : number;
    Imgheight : number;
    imgSource : any;
    text : string;
    btntext : string;
    btnbgColor : string;
    btntextcolor : string;
    circlebg : string;
    ImageMarginTop : number;
    ImageMarginLeft : number;
    style:StyleSheet<ViewStyle>
    func : string;
}

const styles = StyleSheet.create({
    ImageContent: {
        flex: 2,
        flexDirection: "row",
        backgroundColor: '#EBEBEB',
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 10,

    },
    rightbuttonandtextcontent: {
        flex: 3,
        paddingTop: 5,

    },
});

export default Content;