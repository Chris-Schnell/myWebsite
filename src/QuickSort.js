import {React, useState} from 'react';

function QuickSort() {

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

    };

    function logArray() {
        console.log(arrayToSort);
    }


 async   function sortArray(arrayInput, low,high){

    setIsSorting(true);
        //var low = arrayInput[0];
        //var high = arrayInput.length;

        if ( high <= low){
            return;
        }

        try{
        var pivot = await partition(arrayInput, low, high);
       await sortArray(arrayInput, low, pivot - 1);
       await sortArray(arrayInput,pivot + 1, high); }

       catch(error){
        console.log(error);
    }


        setArrayToSort([...arrayInput]);

        setIsSorting(false);

    }

 async   function partition(arrayInput, leftPointer, rightPointer){

        // console.log("--------Entering Partition Function--------");

        var pivot = arrayInput[rightPointer];
        var i = leftPointer - 1;


        var bar = document.getElementById(rightPointer);
        bar.style.backgroundColor = "blue";

        



        for (var j = leftPointer; j <= rightPointer -1; j++){
            
    //        var bar_i;
            var bar_j = document.getElementById(j);
            bar_j.style.backgroundColor = "lightblue";

    /*        if ( i >= 0 ){
                 bar_i = document.getElementById(i);
                 bar_i.style.backgroundColor = "lightblue";
            } */

            await delay(1000);

            if (arrayInput[j] < pivot){
                bar_j.style.backgroundColor = "green";

     /*           if ( i >= 0 ){
                bar_i = document.getElementById(i);
                bar_i.style.backgroundColor = ""; } */
                
                i++;
                
                var temp = arrayInput[i];
                arrayInput[i] = arrayInput[j];
                arrayInput[j] = temp;
                setArrayToSort([...arrayInput]);
                await delay(1000);
            }

            bar_j.style.backgroundColor = "";
   /*         if ( i >= 0 ){
            bar_i = document.getElementById(i);
            bar_i.style.backgroundColor = ""; } */
        }
        i++;
        var temp = arrayInput[i];
        arrayInput[i] = arrayInput[rightPointer];
        arrayInput[rightPointer] = temp;


        bar.style.backgroundColor = "";
        
   //     console.log("--------Exiting Partition Function--------");
        return i;

    }


    return (
        <div className="SortBox">
        <div className="sortAlgoTitleContainer">
        Quick Sort
        </div>
        <div className="barsContainer">
            {arrayToSort.map((bar, index) => {

                return (<div id={index} className='bar' key={index} style={{height: `${bar}%`}}> <div>{bar}</div></div>)
            }

            )}
        </div>

        <div className="SortButtonsContainer">
        <button className="SortButtons" disabled={isSorting} onClick={() => sortArray(arrayToSort, 0, arrayToSort.length - 1)}>Sort Array</button>
        <button className="SortButtons" disabled={isSorting} onClick={resetBars}>Reset Bars</button>
        { /*    <button className="SortButtons" onClick={null}>Test Timeout</button> */ }

        { /*  <button className="SortButtons" onClick={() => sortArray(arrayToSort)}>Test Merge Sort</button> */ }

        </div>
    </div>
    );
}

export default QuickSort;