import { StyleSheet, View, Text, Pressable } from "react-native"

export const GoalItem = (props) => {



    return <View style={styles.goalItem}>
        <Pressable android_ripple={{ color: "#21000" }} onPress={props.onDeleteItem.bind(this, props.id)}>
            <Text style={styles.goalText}>
                {props.text}
            </Text>
        </Pressable>
    </View>
}


const styles = StyleSheet.create({
    goalItem: {
        margin: 6,

        borderRadius: 4,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})