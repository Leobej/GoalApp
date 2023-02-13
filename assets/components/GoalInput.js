import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"
import { useState } from "react";
export const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    const endGoalHandler = () => {
        props.onCancelGoalHandler()
    }

    return (
        <Modal visible={props.visible} animationType={'fade'}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Current goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />


                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={endGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add goal" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor:'#311b6b',
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#ccccc',
        width: '100%',
        marginRight: 10,
        padding: 10,
    },

    buttonContainer: {
        marginTop: 10,
        flexDirection: "row"
    },

    button: {
        width: '30%',
        marginHorizontal: 8
    },

    image: {
        width: 100,
        height: 100,
        margin: 20,
    }

})