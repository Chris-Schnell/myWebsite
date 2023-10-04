import React, { useEffect, useState } from 'react';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import axios from 'axios';

function AnalyzeWorkouts() {
    const [data, setData] = useState([]);


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
               //console.log(response.data[i]);
                temp.push(response.data[i]);
            }
            setPastWorkoutsResponse(temp);
           // console.log(response.data);
            
          })
          .catch(error => {
            console.error('Error fetching past workouts:', error);
          });
        

    }


    function showTotalWeightLifted(){
        let newData = [];
        for(let i = 0; i < pastWorkoutsResponse.length; i++){
            let sessionTotalWeight = 0;
            for ( let j = 0; j < Object.keys(pastWorkoutsResponse[i].sessionData).length; j++){
                //console.log(pastWorkoutsResponse[i].sessionData[j+1]);
                let tempSet = pastWorkoutsResponse[i].sessionData[j+1].split("x");
                //console.log(tempSet);
                sessionTotalWeight += (parseInt(tempSet[0]) * parseInt(tempSet[1]));
            }
            let dataPoint = {
                x: new Date (pastWorkoutsResponse[i].sessionDate), y: sessionTotalWeight
            }
            newData.push(dataPoint);
            
        }
        setData(newData);
    }


    return (
        <div>
            <XYPlot xType="time" height={300} width={300}>
            <LineSeries data={data} />
            </XYPlot>

            <br></br><br></br>
            <button onClick={() => showTotalWeightLifted()}>show TotalWeightLifted</button>
        </div>
    );
}

export default AnalyzeWorkouts;