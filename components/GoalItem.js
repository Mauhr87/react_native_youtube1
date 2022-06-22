import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props){
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalsItem}>
                <Text style={styles.goalsText}>{props.text}</Text>
            </View>
        </Pressable>

    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalsItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#0a94ff',
        borderRadius: 5
      },
    goalsText: {
        color: '#fff'
    }
});