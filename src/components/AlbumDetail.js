import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, image, url } = album;
    const { cardSectionStyle, 
            imageContainerStyle, 
            thumbnailStyle, 
            contentStyle, 
            headerTextStyle,
            imageStyle } = styles;

    return (
        <Card>
            <CardSection style={cardSectionStyle}>
                <View style={imageContainerStyle}>
                    <Image 
                        style={thumbnailStyle} 
                        source={{ uri: image }} 
                    />
                </View>
                <View style={contentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    source={{ uri: image }} 
                    style={imageStyle} 
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    cardSectionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    thumbnailStyle: {
         width: 50, 
         height: 50 
    },
    contentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 360,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
