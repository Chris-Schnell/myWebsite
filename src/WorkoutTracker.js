import React, {useState} from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import CreateWorkout from './CreateWorkout';


function WorkoutTracker() {

    const [greeting, setGreeting] = useState('');
    const [exerciseResponse, setExerciseResponse] = useState('');
    const [exerciseInput, setExerciseInput] = useState('enter an exercise...');

    function callGreeting () {
        axios.get('http://localhost:8080/greeting')
      .then(response => {
        // Update the greeting state with the response data
        setGreeting(response.data);
      })
      .catch(error => {
        console.error('Error fetching greeting:', error);
      });
    }


    function createExercise () {
        axios.put('http://localhost:8080/createExercise', {message: exerciseInput})
      .then(response => {
        // Update the greeting state with the response data
        setExerciseResponse(response.data);
      })
      .catch(error => {
        console.error('Error fetching greeting:', error);
      });
    }


    function updateExerciseInput (data) {
        setExerciseInput(data);
    }





    return (
        <div className="WorkoutContainer">

<div className="workoutTestModules">
        <button onClick={callGreeting}> Get Request </button>
        <br></br>
        <span>Response: </span>
        <div className="response">{greeting}</div>
        </div>


        <div className="workoutTestModules">
        <button onClick={createExercise}> Create Exercise </button>
        <br></br>
        <input value={exerciseInput} onChange={(e) => updateExerciseInput(e.target.value)}/>
        
        <br></br>
        <span>Response: </span>
        <div className="response">{exerciseResponse}</div>
        </div>
            
        <div className="WorkoutInnerContainer">

        <div className="workoutMainUIsection">
        <Link to="/WorkoutTracker/createWorkout" className="workoutTrackerButton">Add a new workout</Link>
        <Link to="/WorkoutTracker/analyzeData" className="workoutTrackerButton">Analyze Your Data</Link>
        <Link to="/WorkoutTracker/workoutHistory" className="workoutTrackerButton">View / Delete past workouts</Link>
        </div>
      

       <Outlet/>

        
        </div>
            
        </div>
    );
}

export default WorkoutTracker;