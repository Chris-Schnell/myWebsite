import {React, useState} from 'react';


function MergeSort() {


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

async function sortArray(arrayInput){
        
    setIsSorting(true);
        var arrayLen = arrayInput.length;

        if (arrayLen <= 1){

            return arrayInput;
        }

        var mid = Math.floor(arrayLen / 2);

        try {

        for (var i = 0; i < 10; i++){
            var bar = document.getElementById(i);
            bar.style.backgroundColor = "";
        }


        var leftArray = arrayInput.slice(0,mid);
        var rightArray = arrayInput.slice(mid);

        for (var i = 0; i < leftArray.length ; i++){
            var bar = document.getElementById(i);
            bar.style.backgroundColor = "blue";
        }

        for (var j = mid; j < mid + rightArray.length; j++){
            var bar = document.getElementById(j);
            bar.style.backgroundColor = "red";
        }


        await delay(1000);

        leftArray = await sortArray(leftArray);
        rightArray = await sortArray(rightArray);

        arrayInput = merge(leftArray, rightArray, arrayInput);
        
        var temp = arrayToSort;
        for (var i = 0; i < arrayInput.length; i++){
            temp[i] = arrayInput[i];
        }
       setArrayToSort([...temp]);
        await delay(1000);

        for (var i = 0; i < 10; i++){
            var bar = document.getElementById(i);
            bar.style.backgroundColor = "";
        } }
        catch(error){
            console.log(error);
        }

        setIsSorting(false);

        return arrayInput;

    }
    
 function merge(leftArray, rightArray, arrayInput){
 
       var leftCondition = 0;
       var rightCondition = 0;
        
        var inputCondition = 0;
        while (leftCondition <= leftArray.length - 1 && rightCondition <= rightArray.length - 1){

            if ( leftArray[leftCondition] < rightArray[rightCondition] ){
                arrayInput[inputCondition] = leftArray[leftCondition];
                inputCondition += 1;
                leftCondition += 1;
            }
            else{
                arrayInput[inputCondition] = rightArray[rightCondition];
                inputCondition += 1;
                rightCondition += 1;
            }

        }

        while ( leftCondition <= leftArray.length - 1 ){
            arrayInput[inputCondition] = leftArray[leftCondition];
            inputCondition += 1;
            leftCondition += 1;
        }

        while ( rightCondition <= rightArray.length - 1 ){
            arrayInput[inputCondition] = rightArray[rightCondition];
            inputCondition += 1;
            rightCondition += 1;
        }

        return arrayInput;
    }


    return (
        <div className="SortBox">
        <div className="sortAlgoTitleContainer">
        Merge Sort
        </div>
        <div className="barsContainer">
            {arrayToSort.map((bar, index) => {

                return (<div id={index} className='bar' key={index} style={{height: `${bar}%`}}> <div>{bar}</div></div>)
            }

            )}
        </div>

        <div className="SortButtonsContainer">
        <button className="SortButtons" disabled={isSorting} onClick={() => sortArray(arrayToSort)}>Sort Array</button>
        <button className="SortButtons" disabled={isSorting} onClick={resetBars}>Reset Bars</button>
        { /*    <button className="SortButtons" onClick={null}>Test Timeout</button> */ }

        { /*  <button className="SortButtons" onClick={() => sortArray(arrayToSort)}>Test Merge Sort</button> */ }

        </div>
    </div>
    );
}

export default MergeSort;