import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props){
    return (
        <View style={styles.goalsItem}>
             <Pressable android_ripple={{color: '#dddddd'}} style={({pressed}) => pressed && styles.pressedItem} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalsText}>{props.text}</Text>
            </Pressable>
        </View>

    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalsItem: {
        marginBottom: 10,
        backgroundColor: '#0a94ff',
        borderRadius: 5
      },
    pressedItem: {
        opacity: 0.5
    },
    goalsText: {
        color: '#fff',
        padding: 10
    }
});