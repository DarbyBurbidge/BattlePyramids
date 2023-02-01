import { FC, useState } from "react"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

interface CardProps {
    id: number
}

export const Card: FC<CardProps> = ({id}) => {
    const [ faceUp, setFaceUp ] = useState(false)

    return (
        <TouchableOpacity onPress={() => {setFaceUp(!faceUp)}}>
        <View style={
            faceUp ? (
                StyleSheet.compose(styles.faceUp, styles.faceDown)
            ) : ( 
                StyleSheet.compose(styles.faceDown, styles.faceUp)
            )
        }>
            {faceUp ? <Text style={styles.cardFace}>{id}</Text> : <></>}
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    faceUp: {
        height: 50,
        width: 70,
        margin: 5,
        backgroundColor: 'blue',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1
    },
    faceDown: {
        backgroundColor: 'green',
    },
    cardFace: {
        width: 70,
        height: 50,
        //top: 16,
        textAlign: "center",
        //alignItems: "center",
        transform: [{rotate: '90deg'}]
    }
})