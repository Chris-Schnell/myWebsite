import {React, useState} from 'react';

function SelectionSort() {

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
        var arrayLen = arrayToSort.length;
        try {
        for ( var i = 0; i < arrayLen; i++){

             var tempMin = tempArray[i];
             var minIndex = i;

            for ( var j = i + 1; j < arrayLen; j++){

                // set the color of bars
                var bar = document.getElementById(i);
                bar.style.backgroundColor = "blue";

                var bar2 = document.getElementById(j);
                bar2.style.backgroundColor = "red";

                await delay(500);

                
                if ( tempArray[j] < tempMin ){
                    var lastMinBar = document.getElementById(minIndex);
                    const computedStyleOfLastMin = window.getComputedStyle(lastMinBar);
                    const backgroundColor = computedStyleOfLastMin.getPropertyValue('background-color');
                    if ( backgroundColor === "rgb(0, 128, 0)"){lastMinBar.style.backgroundColor = "";};
                    bar2.style.backgroundColor = "green";
                    await delay(500);
                    tempMin = tempArray[j];
                    minIndex = j;
                }
            
                const computedStyle = window.getComputedStyle(bar2);
                const backgroundColor = computedStyle.getPropertyValue('background-color');
           
            
            if ( backgroundColor === "rgb(0, 128, 0)"){
                continue;
            }else {
            bar2.style.backgroundColor = ""; }
            await delay(500);
                

            }

            tempArray[minIndex] = tempArray[i];
            tempArray[i] = tempMin;
            
            console.log("setting array");
            tempArray = [...tempArray];
            setArrayToSort(tempArray);
            await delay(500);
            
            bar.style.backgroundColor = "";
             lastMinBar = document.getElementById(minIndex);
                    const computedStyleOfLastMin = window.getComputedStyle(lastMinBar);
                    const backgroundColor = computedStyleOfLastMin.getPropertyValue('background-color');
                    if ( backgroundColor === "rgb(0, 128, 0)"){lastMinBar.style.backgroundColor = "";};

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
        Selection Sort
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

export default SelectionSort;