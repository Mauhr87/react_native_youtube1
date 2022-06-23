import { useState } from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Modal,
    Image
} from 'react-native';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(entereredText) {
        setEnteredGoalText(entereredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
           <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goals.png')} />
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button title="Cancel" onPress={props.onCancel} color="#f70" />
                    </View>
                    <View style={styles.button} >
                        <Button title="Add Goal" onPress={addGoalHandler} color="#3fabda"/>
                    </View>
                </View>
                
            </View> 
        </Modal>
        
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#000034'
    },
    image: {
        width: 130,
        height: 103,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        color: '#000034',
        backgroundColor: '#fff',
        borderRadius: 4,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        marginTop: 15,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});