import {React, useState} from 'react';


function InsertionSort() {

    const [arrayToSort, setArrayToSort] = useState([]);
    const [numBars, ] = useState(10);
    const [isSorting, setIsSorting] = useState(false);

    

    function delay (ms) {
        return new Promise((resolve,reject) => setTimeout(resolve,ms));
    }


    function resetBars() {
        var tempArray = [];
        for (let index = 0; index < numBars; index++) {
            tempArray[index] = Math.floor(Math.random() * 100);

        }
        setArrayToSort(tempArray);
        console.log("bars reset");
    };

    function logArray() {
        console.log(arrayToSort);
    }

    async function sortArray() {
        setIsSorting(true);
        var tempArray = [...arrayToSort];

        try{

        for(var i = 1; i < arrayToSort.length; i++){

            // set the color of bars
            var bar = document.getElementById(i);
            bar.style.backgroundColor = "blue";

            var bar2 = document.getElementById(i - 1);
            bar2.style.backgroundColor = "blue";


            await delay(500);
            
            if ( tempArray[i - 1] > tempArray[i] ){

                bar.style.backgroundColor = "green";
                await delay(500);

            /*    console.log("---------------------------");
                console.log("i", tempArray[i]);
                console.log("i - 1", tempArray[i - 1]);
                console.log("---------------------------"); */

                var tempValue = tempArray[i];
                tempArray[i] = tempArray[i - 1];
                tempArray[i - 1] = tempValue;

                tempArray = [...tempArray];
                setArrayToSort(tempArray);

                await delay(500);

                bar.style.backgroundColor = "yellow";
                bar2.style.backgroundColor = "";
                var j = i - 2;

                
                while ( j >= 0 && tempArray[j] > tempArray[j+1]) {
                    
                    var bar_j = document.getElementById(j);
                    var bar_j1 = document.getElementById(j + 1);
                    bar_j1.style.backgroundColor="lightblue";
                    bar_j.style.backgroundColor = "lightblue";

                    await delay(500);
/*                  
                    console.log("-------------INSIDE WHILE--------------");
                    console.log("j: ", j);
                    console.log("j value =", tempArray[j]);
                    console.log("j+1 value =", tempArray[j + 1]);
                    console.log("-------------INSIDE WHILE--------------");   */

                    var tempValue = tempArray[j];
                    tempArray[j] = tempArray[j + 1];
                    tempArray[j + 1] = tempValue;
                    j = j - 1;


                    tempArray = [...tempArray];
                    setArrayToSort(tempArray);

                    await delay(500);

                    
                    bar_j.style.backgroundColor = "";
                    bar_j1.style.backgroundColor = "";

                    await delay(500);


                }

            }

            else{
                
                bar.style.backgroundColor = "red";
                await delay(500);
                bar2.style.backgroundColor = "";
            }

        } }
        catch(error){
            console.log(error);
        }

            tempArray = [...tempArray];
            setArrayToSort(tempArray);

            setIsSorting(false);

    }

    return (
        <div className="SortBox">
        <div className="sortAlgoTitleContainer">
        Insertion Sort
        </div>
        <div className="barsContainer">
            {arrayToSort.map((bar, index) => {

                return (<div id={index} className='bar' key={index} style={{height: `${bar}%`}}> <div>{bar}</div></div>)
            }

            )}
        </div>

        <div className="SortButtonsContainer">
        <button className="SortButtons" disabled={isSorting} onClick={sortArray}>Sort Array</button>
        <button className="SortButtons" disabled={isSorting} onClick={resetBars}>Reset Bars</button>
        { /*    <button className="SortButtons" onClick={null}>Test Timeout</button> */ }
        
        </div>
    </div>
    );
}

export default InsertionSort;