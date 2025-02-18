import { Image, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Slide from '../components/Slide';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export interface IArtWork {
    title: string,
    author: string,
    year: number,
    imageUrl: string
}

const artwork = [
  {
    title: 'Мона Лиза',
    author: 'Леонардо да Винчи',
    year: 1503,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/250px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
  },
  {
    title: 'Звёздная ночь',
    author: 'Винсент Ван Гог',
    year: 1889,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'
  },
  {
    title: 'Крик',
    author: 'Эдвард Мунк',
    year: 1893,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1LM2RBapUIeyLLI31dRQ_Ixij5IDewQBaA&s'
  },
  {
    title: 'Девушка с жемчужной серёжкой',
    author: 'Ян Вермеер',
    year: 1665,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fXxkohYB94dWgI7k9yNoDj0zvn6KgTNZcg&s'
  },
  {
    title: 'Рождение Венеры',
    author: 'Сандро Боттичелли',
    year: 1486,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9v3SJUhLh65lLuJo-3nsm4cPguDQb_4mGyg&s'
  },
  {
    title: 'Тайная вечеря',
    author: 'Леонардо да Винчи',
    year: 1498,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZosexMf391WNZoqWErjVDEZVdcfOYDTKLA&s'
  },
  {
    title: 'Сотворение Адама',
    author: 'Микеланджело',
    year: 1512,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjX1KMYGj2PfsZ4niTGhofITwlWBecQ_4dQ&s'
  },
  {
    title: 'Постоянство памяти',
    author: 'Сальвадор Дали',
    year: 1931,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/d/dd/The_Persistence_of_Memory.jpg'
  },
  {
    title: 'Автопортрет с обрезанными волосами',
    author: 'Фрида Кало',
    year: 1940,
    imageUrl: 'https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-with-cropped-hair-1940.jpg!Large.jpg'
  },
  {
    title: 'Американская готика',
    author: 'Грант Вуд',
    year: 1930,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvPZpMKGkFVr4l5M15SIBWoFT39EKpRjENQ&s'
  }
];

export default function HomeScreen() {
  const [index, setIndex] = useState<number>(0);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false);

  useEffect(()=>{
    setIsNextDisabled(index >= artwork.length-1);
    setIsPrevDisabled(index <= 0);
  }, [index])

  const handleNextClick = () => {
    // setIndex((prev)=>prev >= artwork.length-1 ? 0 : prev+1);
    setIndex((prev)=>prev+1);
  }

  const handlePrevClick = () => {
    // setIndex((prev)=>prev <= 0 ? artwork.length-1 : prev-1);
    setIndex((prev)=>prev-1);
  }
  
  return (
    <View style={styles.basic}>
      {/* {artwork.map((el, i)=>(
        <Slide key={i} title={el.title} author={el.title} year={el.year} imageUrl={el.imageUrl}/>
      ))} */}
      <Slide isNextDisabled={isNextDisabled} isPrevDisabled={isPrevDisabled} 
        handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} artwork={artwork[index]}
      />
      <Text>{index}</Text>
    </View>
    // <View style={styles.basic}>
    //   <View style={styles.title}>
    //     <Image style={styles.logo} source={{uri: 'https://tou.edu.kz/templates/psu2020/images/logo/brand-logo.png'}}/>
    //     <Text style={{fontSize: 30}}>Taisalmas Sultan</Text>
    //     <Text style={{fontSize: 24}}>CS-301</Text>
    //   </View>

    //   <View style={styles.links}>
    //     <View style={styles.link}>
    //       <Image style={styles.linksImage} source={{uri: 'https://cdn-icons-png.flaticon.com/128/6738/6738307.png'}}/>
    //       <Text>+7 (700) 294 6159</Text>
    //     </View>
    //     <View style={styles.link}>
    //       <Image style={styles.linksImage} source={{uri: 'https://cdn-icons-png.flaticon.com/128/7887/7887523.png'}}/>
    //       <Text>taisalmas14@gmail.com</Text>
    //     </View>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  basic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red'
  },
  logo: {
    width: 300, 
    height: 100, 
    resizeMode:'contain',
    marginBottom: 10
  },
  title: {
    alignItems: 'center',
    bottom: 100
  },
  links: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    gap: 2
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%'
  },
  linksImage: {
    width: 25, 
    height: 25,
  },
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