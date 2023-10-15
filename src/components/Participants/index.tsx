import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from './styles'

type ParticipantProps = {
    name: string,
    handleParticipantRemove : (name : string) => void
}

export function Participant({name , handleParticipantRemove} : ParticipantProps){

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity style={styles.button} onPress={() => handleParticipantRemove(name)}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}