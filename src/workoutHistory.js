import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WorkoutHistory() {

    const [pastWorkoutsResponse, setPastWorkoutsResponse] = useState(["pulling..."]);


    useEffect(() => {
        pullPastWorkouts();
    }, []);
    
    function pullPastWorkouts() {
            axios.get('http://localhost:8080/savedWorkouts')
          .then(response => {
            // Update the greeting state with the response data
            let temp = [];
            for (let i = 0; i < response.data.length; i++){
              //  console.log(response.data[i]);
                temp.push(response.data[i]);
            }
            setPastWorkoutsResponse(temp);
            //console.log(response.data);
            
          })
          .catch(error => {
            console.error('Error fetching past workouts:', error);
          });
        

    }

    function deleteSession(e,sessionId) {
        
       // console.log("deleted " + sessionId);

       const url = `http://localhost:8080/deleteSession/${sessionId}`;

       // Make the DELETE request using Axios
        axios.delete(url)
         .then((response) => {
         // Handle the successful response here if needed
         console.log(response.data); // For example, display the success message
         })
         .catch((error) => {
          // Handle the error here if needed
           console.error('Error deleting resource:', error);
         });

    }

    return (
        <div>
            Showing past workout data

            <div className="pastWorkoutContainer">
                {pastWorkoutsResponse.map((sessions,index) => {
                    return (
                        <div key={index}>
                        {sessions.sessionExercise ? (<div>
                            <button className="removeButton" onClick={e => deleteSession(e,sessions.id)}> Delete session</button>
                        <div> Session Date: {new Date(sessions.sessionDate).toLocaleDateString()} - {sessions.sessionExercise.name}</div> 
                        <div>
                        RepsxWeight:
                            {
                            Object.keys(sessions.sessionData).map((keyName, setsIndex) => {
                                return (
                                    <div key={setsIndex}>
                                        
                                        Set {setsIndex + 1}: {sessions.sessionData[setsIndex + 1]}lbs
                                    </div>
                                    
                                )
                            })
                        
                        }</div></div>
                        ) : (
                        <div>Loading...</div> )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default WorkoutHistory;