import { StyleSheet, Text, View } from "react-native"
import { Card } from "./Card"
import { FC } from "react"

interface RowProps {
    rowNum: number
    numCards: number    
}

export const Row: FC<RowProps> = ({rowNum, numCards}) => {

    const numPrev = [...Array(rowNum).keys()].reduce((prev, curr) => {
        return (curr + prev + 1)
    }, 0)
    console.log(numPrev)
    const cards = [...Array(numCards).keys()].map((i) => { return <Card key={numPrev + i} id={numPrev+i} />})
    return (
        <View style={styles.row}>
            {cards}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '10%',
        width: 40,
        height: '90%',
    }
})