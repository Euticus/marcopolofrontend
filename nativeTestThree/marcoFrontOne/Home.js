import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import Game from './Game'

export default function Home() {
    return (
        <View style={styles.container}>
            <Button onPress={()=> <Game />} title="Create Game" />
        </View>
    )
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});