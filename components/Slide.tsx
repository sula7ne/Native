import {Button, Image, Platform, StyleSheet, Text, TextInput, View} from 'react-native';

import { IArtWorkList } from '@/data/artWorkList';
import React from 'react';

interface ISlideProps {
    artwork: IArtWorkList,
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


// import { Image, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
// import { useEffect, useState } from 'react';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import Slide from '../components/Slide';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   const [index, setIndex] = useState<number>(0);
//   const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
//   const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false);

//   useEffect(()=>{
//     setIsNextDisabled(index >= artwork.length-1);
//     setIsPrevDisabled(index <= 0);
//   }, [index])

//   const handleNextClick = () => {
//     // setIndex((prev)=>prev >= artwork.length-1 ? 0 : prev+1);
//     setIndex((prev)=>prev+1);
//   }

//   const handlePrevClick = () => {
//     // setIndex((prev)=>prev <= 0 ? artwork.length-1 : prev-1);
//     setIndex((prev)=>prev-1);
//   }
  
//   return (
//     <View style={styles.basic}>
//       {/* {artwork.map((el, i)=>(
//         <Slide key={i} title={el.title} author={el.title} year={el.year} imageUrl={el.imageUrl}/>
//       ))} */}
//       <Slide isNextDisabled={isNextDisabled} isPrevDisabled={isPrevDisabled} 
//         handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} artwork={artwork[index]}
//       />
//       <Text>{index}</Text>
//     </View>
//     // <View style={styles.basic}>
//     //   <View style={styles.title}>
//     //     <Image style={styles.logo} source={{uri: 'https://tou.edu.kz/templates/psu2020/images/logo/brand-logo.png'}}/>
//     //     <Text style={{fontSize: 30}}>Taisalmas Sultan</Text>
//     //     <Text style={{fontSize: 24}}>CS-301</Text>
//     //   </View>

//     //   <View style={styles.links}>
//     //     <View style={styles.link}>
//     //       <Image style={styles.linksImage} source={{uri: 'https://cdn-icons-png.flaticon.com/128/6738/6738307.png'}}/>
//     //       <Text>+7 (700) 294 6159</Text>
//     //     </View>
//     //     <View style={styles.link}>
//     //       <Image style={styles.linksImage} source={{uri: 'https://cdn-icons-png.flaticon.com/128/7887/7887523.png'}}/>
//     //       <Text>taisalmas14@gmail.com</Text>
//     //     </View>
//     //   </View>
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   basic: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'red'
//   },
//   logo: {
//     width: 300, 
//     height: 100, 
//     resizeMode:'contain',
//     marginBottom: 10
//   },
//   title: {
//     alignItems: 'center',
//     bottom: 100
//   },
//   links: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: 40,
//     gap: 2
//   },
//   link: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     width: '100%'
//   },
//   linksImage: {
//     width: 25, 
//     height: 25,
//   },
// })