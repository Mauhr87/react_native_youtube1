import { StyleSheet, Text, View } from 'react-native';

function GoalItem(props){
    return (
        <View style={styles.goalsItem}>
            <Text style={styles.goalsText}>{props.text}</Text>
        </View>
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