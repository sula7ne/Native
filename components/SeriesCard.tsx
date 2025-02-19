import { Image, StyleSheet, Text, View } from "react-native";

import { ISeries } from "@/data/seriesList";
import React from "react";

interface ISeriesCardProps {
    card: ISeries
}

const SeriesCard: React.FC<ISeriesCardProps> = ({card}) => {
    return(
        <View style={styles.card}>
            <Text style={{fontSize: 20}}>{card.title}</Text>
            <View style={{alignItems: 'center'}}>
                <Image source={{uri: card.imageUrl}} style={styles.image}/>
            </View>
            <Text style={{fontSize: 15}}>{card.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#E6E9EB',
        borderRadius: 10,
        padding: 10,
        rowGap: 8,
    },
    image: {
        width: '100%', 
        height: 220,
        resizeMode: 'stretch',
    },
});

export default SeriesCard;