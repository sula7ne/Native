import { FlatList, Image, Platform, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native';
import { useEffect, useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import SeriesCard from '@/components/SeriesCard';
import Slide from '../components/Slide';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { seriesList } from '@/data/seriesList';

export default function HomeScreen() {
  return (
    <View style={styles.basic}>
      <Text style={{...styles.title, color: useColorScheme() == 'dark' ? 'white' : 'black'}}>30 лучших сериалов</Text>
      <FlatList
        data={seriesList} 
        renderItem={({item})=><SeriesCard card={item}/>}
        keyExtractor={(item)=>item.id.toString()}
        contentContainerStyle={{rowGap: 15, marginLeft: 15, marginRight: 15}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  basic: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    rowGap: 10,
    width: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 600
  },
  
  // text: {
  //   color: 'red'
  // },
  // logo: {
  //   width: 300, 
  //   height: 100, 
  //   resizeMode:'contain',
  //   marginBottom: 10
  // },
  // title: {
  //   alignItems: 'center',
  //   bottom: 100
  // },
  // links: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   bottom: 40,
  //   gap: 2
  // },
  // link: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 10,
  //   width: '100%'
  // },
  // linksImage: {
  //   width: 25, 
  //   height: 25,
  // },
})

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });



    //  <ParallaxScrollView
    //   headerBackgroundColor={{ light: 'yellow', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView>
    //     <ThemedText>asd</ThemedText>
    //     <Text>dadfsd</Text>
    //   </ThemedView>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12'
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step : Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>