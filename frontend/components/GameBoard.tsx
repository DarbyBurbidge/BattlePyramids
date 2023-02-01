import { StyleSheet, View } from "react-native"
import { Card } from "./Card"
import { Row } from "./Row"

export const GameBoard = () => {
    return (
        <View style={ styles.gameBoard }>
            <Row rowNum={0} numCards={1}/>
            <Row rowNum={1} numCards={2}/>
            <Row rowNum={2} numCards={3}/>
            <Row rowNum={3} numCards={4}/>
            <Row rowNum={4} numCards={5}/>
            <Row rowNum={5} numCards={6}/> 
            <Row rowNum={6} numCards={7}/>
        </View>
    )
}

const styles = StyleSheet.create({
    gameBoard: {
        display: "flex",
        flex: 1,
        flexDirection: "row-reverse",
        direction: "ltr",
        padding: 50,
        paddingHorizontal: '10%',
        backgroundColor: 'red'
    }
})