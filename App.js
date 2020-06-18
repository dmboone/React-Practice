/**
 * Swiper_Test
 * Destiny Boone
 * 18 June 2020
 * 
 * Description: An easy and simple to use React Native component
 * to render a high performant and easily customizable image 
 * gallery with common gestures like pan, pinch and double tap. 
 * Supporting both iOS and Android.
 */

import React, {Component} from 'react';
import GallerySwiper from 'react-native-gallery-swiper'; //imports gallery swiper
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class SwiperComponent extends Component {
  render () {
    return (
      <GallerySwiper
        images={[
                  // Version *1.1.0 update (or greater versions): 
                  // Can be used with different image object fieldnames.
                  // Ex. source, source.uri, uri, URI, url, URL
                  { uri: "https://picsum.photos/1080/1920",
                    dimensions: { width: 1080, height: 1920 } },
                  { uri: "https://picsum.photos/1080/1920", 
                    dimensions: {width: 1080, height: 1920}
                  },
                  { uri: "https://picsum.photos/1080/1920",
                    dimensions: { width: 1080, height: 1920 } },
              ]}
      />
    );
  }
};

  
