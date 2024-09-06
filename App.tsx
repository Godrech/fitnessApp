import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, TouchableOpacity, TouchableHighlight, } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { WorkOutDetails } from './types'
import React from 'react';
//Code Attribution
//Code adapted from class
//Author: Yusra Adnan
//Available At: Class Session

//Code Attribution
//(The IIE). 2024. MAST5112 MODULE MANUAL.UNPUBLISHED
export default function App() {

  const[workouts, setWorkOuts] = useState<WorkOutDetails[]>([
   
  ]);

  const[WorkoutName, setWorkOutName] = useState<string>('');
  const[duration, setDuration] = useState<string>('');
  const[exerciseType, setType] = useState<string>('');
  const[calories, setcalories] = useState<string>('');
  const[TotalCalories,setTotalcalories] =useState<number>(0);

  const ExerciseType = ['Cardio', 'strength', 'Flexibility', 'Balance', 'HIT'];
  const handleSubmit =() => {
    if (WorkoutName && duration && exerciseType && calories) {
      const newWorkout : WorkOutDetails = {
        Workout_Name: WorkoutName,
        duration: parseInt(duration),
        exercise_Type: exerciseType,
        calories: parseInt(calories)
      };
      setWorkOuts([...workouts, newWorkout]);
      setTotalcalories(TotalCalories + newWorkout.calories);
      
    
    }
  }
  const totalWorkouts = workouts.length;
  return (
    <SafeAreaView style={styles.itemContainer}>
   <View>
    <Text style={styles.heading}> Fitness Tracker</Text>
   </View>

   <View style={styles.summaryContainer}>
    <Text style={styles.summaryHeading} >TODAY'S SUMMARY</Text>
   <Text style={styles.summaryText}>Total Workouts: {totalWorkouts}</Text>
   <Text style={styles.summaryText}>Total Calories Burnt: {TotalCalories}</Text>
   </View>
   
   <FlatList
   style={styles.listStyle}
   data={workouts}
   keyExtractor={(item, index) => index.toString()}
   renderItem={({ item }) => (
    <View style={styles.container}>
      <Text style={styles.workName}>Workout Name: {item.Workout_Name}</Text>
      <Text style={styles.details}>Duration: {item.duration} min </Text>
      <Text style={styles.details}> Workout type:{item.exercise_Type}</Text>
      <Text style={styles.details}>Calories burnt:{item.calories}</Text>
    </View>
   )}
  ></FlatList>
  <View style={styles.userInputView}>
    <TextInput style={styles.input}
    placeholder='Work out name'
    value={WorkoutName}
    onChangeText={setWorkOutName}>
    </TextInput>

<TextInput style={styles.input}
placeholder='Duration (min)'
value={duration}
onChangeText={setDuration}>
</TextInput>

<Picker 
selectedValue={exerciseType}
onValueChange={(itemValue) => setType(itemValue)}
style={styles.picker}>

  {ExerciseType.map((exerciseType) => (
    <Picker.Item label={exerciseType} value={exerciseType} key={exerciseType}/>
  ))}
</Picker>

<TextInput
style={styles.input}
placeholder='Calories burnt'
value={calories}
onChangeText={setcalories}>
</TextInput>

<TouchableHighlight onPress={handleSubmit} style={styles.button}>
  <Text style={styles.buttonText}>Save</Text>
</TouchableHighlight>
  </View>
    </SafeAreaView>
   
  );
};
const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  summaryHeading: {
    fontSize: 30,
    textAlign: 'center',
    color: '#002147',
    fontWeight: '600',
    padding: 12,
    backgroundColor: '#FFDD57',
    borderRadius: 12,
    marginVertical: 10,
    width: '90%',
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
    borderColor: '#FFDD57',
    borderWidth: 5,
    elevation: 9,
  },
  summaryContainer: {
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
  },
  listStyle: {
    maxHeight: 400,
  },
  itemContainer: {
    flex: 2,
    padding: 25,
    marginVertical: 8,
    backgroundColor: '#EAF0F6',
    borderRadius: 8,
    borderColor: '#002147',
    borderWidth: 1,
    elevation: 1,
  },
  workName: {
    fontSize: 30,
    fontWeight: '600',
    color: '#002147',
  },
  heading: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: '700',
    color: '#FFDD57',
    marginBottom: 15,
    
  },
  details: {
    fontSize: 20,
    fontWeight: '500',
    color: '#002147',
  },
  userInputView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 310,
    marginVertical: 5,
    backgroundColor: '#ADD8E6',
    padding: 20,
    borderRadius: 12,
    elevation: 8,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
    fontSize: 25,
    color: '#002147',
    borderWidth: 1,
    borderColor: '#FFDD57',
    elevation: 8,
  },
  picker: {
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
    fontSize: 30,
    fontWeight: '600' ,
    color: '#002147',
    elevation: 8,
    marginBottom: 1,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3187A2',
    paddingVertical: 8,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginTop: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 8,
    shadowRadius: 8,
    shadowOffset: { width: 6, height: 5 },
    elevation: 8,
  },
  buttonText: {
    color: '#FFDD57',
    fontWeight: '600',
    fontSize: 25,
  },
  summaryText: {
    textAlign: 'center',
    color: '#002147',
    fontSize: 30,
    fontWeight: '600',
    padding: 12,
    backgroundColor: '#FFDD57',
    marginVertical: 5,
    borderRadius: 12,
    width: '100%',
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
});