import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem (props) {
    return (
        <Pressable 
            onPress={props.deleteGoalHandler.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        padding: 16,
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#6842cc'
      },
      pressedItem: {
          opacity: 0.5
      },
      goalText: {
        color: '#E8E6E8',
        fontWeight: '600'
      }
})