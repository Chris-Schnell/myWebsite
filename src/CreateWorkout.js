import React, { useState } from 'react';
import axios from 'axios';

function CreateWorkout() {

    const [testMap, setTestMap] = useState({'reps': 'default', 'weight': 'default'});
    const [testList, setTestList] = useState([["default", "default", "default", "default"],["default", "default", "default", "default"]]);

    const [exerciseNames, setExerciseNames] = useState(['Choose an exercise']);

    const [exerciseFields, setExerciseFields] = useState(
        [
            [
                {reps: '', weight: ''},
            ],
        ]
    )

    const handleFormChange = (event,index,outerindex) => {

       let data = [...exerciseFields];
       data[outerindex][index][event.target.name] = event.target.value;
       setExerciseFields(data);
    //  console.log(index);
    //  console.log(event.target)

    }

    const submit = (e) => {
        e.preventDefault();
        console.log("submitting" + exerciseFields);

        const url = `http://localhost:8080/storeWorkout?exerciseNames=${encodeURIComponent(exerciseNames)}`;

        axios.put(url, {exerciseFields})
        .then(response => {
        // Update the greeting state with the response data
        console.log("reponse" + response.data);
      })
      .catch(error => {
        console.error('Error fetching greeting:', error);
      });

    }

    const addFields = (event, outerindex) => {
        event.preventDefault();
        let object = {
            reps: '',
            weight: ''
        }

       // console.log(outerindex);
        
        let tempExercise = [...exerciseFields[outerindex], object];
        let tempExerciseFields = [...exerciseFields];
        tempExerciseFields[outerindex] = tempExercise;
        setExerciseFields(tempExerciseFields);
    }

    const removeFields = (event,outerindex, index) => {
        event.preventDefault();
        let tempExercise = [...exerciseFields[outerindex]];
        //console.log(index);
        tempExercise.splice(index,1);
        let tempExerciseFields = [...exerciseFields];
        tempExerciseFields[outerindex] = tempExercise;
        setExerciseFields(tempExerciseFields);
    }

    const addExercise = (e) => {
        e.preventDefault();
        let object = [
            {reps: '', weight: ''},
        ];

        let tempExerciseFields = [...exerciseFields, object];
        setExerciseFields(tempExerciseFields);

        let data = [...exerciseNames, "Choose an exercise"];
        setExerciseNames(data);

    }

    const removeExercise = (e, outerindex) => {

        
        e.preventDefault();
        let tempExerciseFields = [...exerciseFields];
        tempExerciseFields.splice(outerindex,1);
        setExerciseFields(tempExerciseFields);

        let data = [...exerciseNames];
        data.splice(outerindex,1);
        setExerciseNames(data);

    }

    const handleExerciseNameChange = (e,outerindex) => {
        let data = [...exerciseNames];
        data[outerindex] = e.target.value;
        setExerciseNames(data);

    }

    return (
        <div className="createWorkoutContainer">

        <form onSubmit={submit}>

            <div className='exercisesContainer'>
            
            
            {exerciseFields.map((exercise,outerindex) => {
                return (
                    <div key={outerindex} className="exerciseContainer">
                        <span className="setTitle">
                    <h4 >Exercise {outerindex + 1}</h4> <button className="removeButton" onClick={e => removeExercise(e, outerindex)}>Remove</button> </span>
                    <input
                        name='name'
                        placeholder='Exercise Name'
                        onChange={event => handleExerciseNameChange(event, outerindex)}
                        value={exerciseNames[outerindex]}
                        />
                        <button onClick={event => addFields(event, outerindex)}>Add set</button>
                        
                        {
                        
                        exercise.map((form,index) => {

                            return (
                                <div key={index}>
                                    <span className="setTitle">
                                    <h4 >Set {index + 1}</h4> <button className="removeButton" onClick={(event) => removeFields(event, outerindex, index)}>remove set</button> </span>

                                    <input
                                    name='reps'
                                    placeholder='Reps'
                                    onChange={event => handleFormChange(event,index,outerindex)}
                                    value={form.reps}
                                    />
                                    <input
                                    name='weight'
                                    placeholder='Weight'
                                    onChange={event => handleFormChange(event,index,outerindex)}
                                    value={form.weight}
                                    />
                                </div>
                            )
                        })



                    }</div>   
                )
            })} </div>

            

            </form>
            
            <br></br><br></br>
            <button onClick={e => addExercise(e)}>Add an exercise</button> <br></br>

            <button onClick={e => submit(e)}>Submit</button>
            


        </div>
    );
}

export default CreateWorkout;