import React, {useState} from 'react';
import { Stack, router } from "expo-router";

import { View, Text, Button, StyleSheet, Touchable, TouchableOpacity } from "react-native";

// interface ButtonProps {
//     title: string;
//     onPress: ()=> void;
//     isSelected: number | boolean;
// };

// const SelectorButton: React.FC<ButtonProps> = ({title, onPress, isSelected}) => {
//     return (
//         <TouchableOpacity
//         onPress={onPress}
//         style={[styles.button, isSelected && styles.selectedButton]}>
//             <Text>{title}</Text>
//         </TouchableOpacity>
//     );
// };

const SoloPlay: React.FC = () => {
    // const [selectedButton]
    const [comp, setComp] = useState<number>(1);
    const [buyIn, setBuyIn] = useState<number>(5)
    const [oneDealer, setOneDealer] = useState<boolean>(false);

    const play = () => {
        router.navigate('play');
    }

    return(
        <View style={{alignItems: 'center'}}>
            <Stack.Screen
            options={{
                title: 'Solo Play'
            }}
            />
            <Text>How many computers?</Text>
            <View style={styles.container}>
                <Button onPress={()=> setComp(1)} title="1" />
                <Button onPress={()=> setComp(2)} title="2" />
                <Button onPress={()=> setComp(3)} title="3" />
                <Button onPress={()=> setComp(4)} title="4" />
                <Button onPress={()=> setComp(5)} title="5" />
            </View>
            <Text>Buy-in:</Text>
            <View style={styles.container}>
                <Button onPress={()=> setBuyIn(5)} title="$5" />
                <Button onPress={()=> setBuyIn(10)} title="$10" />
                <Button onPress={()=> setBuyIn(20)} title="$20" />
            </View>
            <Text>Dealers?</Text>
            <View style={styles.container}>
                <Button onPress={()=> setOneDealer(false)} title="Everyone Deals" />
                <Text style={{marginHorizontal:30}}>or</Text>
                <Button onPress={()=> setOneDealer(true)} title="Only Me" />
            </View>
            <Button title="Play" />

            <Text>Players: {comp}</Text>
            <Text>Buy-in: ${buyIn}</Text>
            <Text>Only I Deal: {oneDealer ? 'True' : 'False'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        width: '50%'
    }
})

export default SoloPlay;