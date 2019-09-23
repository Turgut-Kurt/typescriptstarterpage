

interface ImageContentProps {
    imgSource: any;
    circlebg: string;
    Imgwidth: number;
    Imgheight: number;
    ImagelocationX: String;
    ImagelocationY: String;
    ImageMarginTop: number;
    ImageMarginLeft: number;
}
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
const ImageContent_new = (props:ImageContentProps)  => {
  return(
      <View style={styles(null, null, null, null, null,null,null).container}>
          <View style={styles(props.circlebg, null, null, props.ImagelocationX, props.ImagelocationY,null,null).circle}>
              <Image
                  source={props.imgSource}
                  style={styles(null, props.Imgwidth, props.Imgheight, null, null,props.ImageMarginTop,props.ImageMarginLeft).img}
              />
          </View>
      </View>
  )
};
const styles = (circlebg, Imgwidth, Imgheight, ImagelocationX, ImagelocationY,ImageMarginTop,ImageMarginLeft) => StyleSheet.create({
    img: {
        marginTop: ImageMarginTop,
        marginLeft:ImageMarginLeft,
        width: Imgwidth,
        height: Imgheight,
        resizeMode: 'center',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: ImagelocationX,
        justifyContent: ImagelocationY,
        backgroundColor: circlebg,
    },
    container: {
        flex: 2,
        paddingTop: 10
    },
});
export default ImageContent_new;