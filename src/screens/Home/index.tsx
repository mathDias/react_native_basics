import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participants'
import { useState } from 'react'

export default function Home() {

  const [participants,setParticipants] = useState<string[]>([])
  const [participantName,setParticipantName] = useState('')


  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      return Alert.alert(`Participante Existe`, `Já existe um participante com esse nome na lista`)
    }
    setParticipants([...participants,participantName])
    setParticipantName('')
  }  

  function handleParticipantRemove(name : string){
    Alert.alert('Remover',`Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(participants.filter(e => e != name))
          Alert.alert('Participante removido com sucesso')
        }
      },{
        text: 'Não',
        style: 'cancel'
      }
    ])
    console.log('Voce remover o ' + name)
  }  

  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>
        React Native Event
        </Text>

        <Text style={styles.eventDate}>
        Sexta, 13 de Outubro de 2023.
        </Text>
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder='Nome do participante' placeholderTextColor="#6b6b6b" 
              onChangeText={setParticipantName} value={participantName}/>
            <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd()}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
      <FlatList ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>Nenhum participante foi adicionado a lista :(</Text>
      )} showsVerticalScrollIndicator={false} data={participants} keyExtractor={item => item} renderItem={({item}) => (
          <Participant key={item} name={item} handleParticipantRemove={ () => handleParticipantRemove(item)}></Participant>
      )}/>
        
    </View>
  )
}