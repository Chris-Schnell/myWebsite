import {React, useState} from 'react';

function BubbleSort(props) {

    const [arrayToSort, setArrayToSort] = useState([]);
    const [numBars, ] = useState(10);
    const [isSorting, setIsSorting] = useState(false);

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
        // creates a temporary array to perform the swaps
        // then updates the state of arrayToSort with a new memory reference and the dom gets updated
        // arrayToSort is mapped in a div
        var tempArray = [...arrayToSort];

        try{
        for(let index = 0; index < arrayToSort.length - 1; index++){
            for( let n = 0; n < arrayToSort.length-1 - index; n++){
                
                tempArray = [...tempArray];

                
                // set the color of n and n+1 (the bars that are being checked whether they should swap)
                var bar = document.getElementById(n);
                bar.style.backgroundColor = "blue";

                var nextbar = document.getElementById(n + 1);
                nextbar.style.backgroundColor = "lightblue";
                
               await delay(500);
               //console.log(n);
               
                
                /** 
                
                **/
                
                if ( tempArray[n] >= tempArray[n+1] ){

                    // if bars are going to be swapped, make n+1 green
                    nextbar.style.backgroundColor = "red";
                    await delay(500);
                 //   bar.style = "barFade";
                //    nextbar.style = "barFade";
                    


                    var temp = tempArray[n];
                    
                    tempArray[n] = tempArray[n+1];
                 //   bar.id = n + 1;

                    tempArray[n+1] = temp;
                    
                //    nextbar.id = n;
                    
                }
                else{
                    nextbar.style.backgroundColor = "green";
                    await delay(500);
                }

                //turning off the coloring of bars when they are done being checked/swapped
                bar.style.backgroundColor = "";
                nextbar.style.backgroundColor = "";
                
                //update the state of the array of bars which is being displayed
                setArrayToSort(tempArray);
                
            }
        } } 
        catch(error){
            console.log(error);
        }
        setIsSorting(false);
        
    };

/*
    //demonstrates clearly how await works
    // also great demonstration of how state change on array needs new memory reference to update the DOM ( tempArray = [...tempArray] )
    async function testTimeout(){
        
        var tempArray = [...arrayToSort];
        
        for (let index = 0; index < arrayToSort.length - 1; index++) {

            tempArray = [...tempArray];

            await delay(500);
            var bar = document.getElementById(index);
            bar.style.backgroundColor = "red";

            await delay(500);
            tempArray[index] = tempArray[index + 1];
            
            await delay(500);
            setArrayToSort(tempArray);
            
            await delay(500);
            
            bar.style.backgroundColor = "";

            
        }
        console.log(tempArray, "temp");
    }
*/
    function delay (ms) {
    return new Promise((resolve,reject) => setTimeout(resolve,ms));
}

    return (
        <div className="SortBox">
            <div className="sortAlgoTitleContainer">
            Bubble Sort </div>
            <div className="barsContainer">
                {arrayToSort.map((bar, index) => {

                    return (<div id={index} className='bar' key={index} style={{height: `${bar}%`}}> <div>{bar}</div></div>)
                }

                )}
            </div >
            <div className="SortButtonsContainer">
            <button className="SortButtons" disabled={isSorting} onClick={sortArray}>Sort Array</button>
            <button className="SortButtons" disabled={isSorting} onClick={resetBars}>Reset Bars</button>
           { /* <button className="SortButtons" onClick={testTimeout}>Test Timeout</button> */ }
            
            </div>
        </div>
    );
}

export default BubbleSort;