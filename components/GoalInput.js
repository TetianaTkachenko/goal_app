import { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler (enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }
    
    return (
        <Modal visible={props.visible} animationType='slide' >
            <View style={styles.inputContainer}>
            <Image 
                style={styles.image}
                source={require('../assets/images/goal.png')} 
            />
            <TextInput 
                style={styles.textInput} 
                placeholder='My next goal is...'
                onChangeText={goalInputHandler}
                value={enteredGoalText} />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                        title='Cancel'
                        onPress={props.onCancel}
                        color='#f31282' />
                </View>
                <View style={styles.button}>
                    <Button 
                        title='Add Goal'
                        onPress={addGoalHandler}
                        color='#b180f0' />
                </View>
            </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        padding: 16,
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        color: '#120438'
    },
    inputContainer: {
        padding: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})