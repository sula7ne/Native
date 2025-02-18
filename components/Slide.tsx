import {Button, Image, Platform, StyleSheet, Text, TextInput, View} from 'react-native';

import { IArtWork } from '@/app';
import React from 'react';

interface ISlideProps {
    artwork: IArtWork,
    handleNextClick: ()=>void,
    handlePrevClick: ()=>void,
    isNextDisabled: boolean,
    isPrevDisabled: boolean
}

const Slide: React.FC<ISlideProps> = ({artwork, handleNextClick, handlePrevClick, isNextDisabled, isPrevDisabled}) => {
    const {title, author, year, imageUrl} = artwork;
    
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: imageUrl}}/>

            
            <View style={styles.title}>
                <Text numberOfLines={1} style={{fontSize: 25}}>{title}</Text>
                <Text style={{fontSize: 18}}>{author} ({year})</Text>
            </View>
            
            <View style={styles.btns}>
                <Button disabled={isPrevDisabled} onPress={handlePrevClick} title='Previous'/>
                <Button disabled={isNextDisabled} onPress={handleNextClick} title='Next'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
    },
    image: {
        width: 350, 
        height: 350,
        resizeMode: 'contain',
    },
    title: {
        alignItems: 'center',
        marginTop: 20,
        width: '80%'
    },
    btns: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})

export default Slide;