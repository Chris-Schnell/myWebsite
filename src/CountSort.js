import {React, useState} from 'react';


function CountSort() {

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

  async function sortArray( ) {
    
    setIsSorting(true);
        var temp = arrayToSort;

        var countArray = [];


        try {
        for ( var i = 0; i < temp.length; i++){
            var value = temp[i];
            if ( countArray[value] === undefined  ){
                countArray[value] = 1;
            } else { 
            countArray[value] += 1; }
        }
        


        for ( var i = 1; i < countArray.length; i++){
            if (countArray[i] === undefined){
                countArray[i] = 0;
            }

            if (countArray[i-1] === undefined){
                countArray[i-1] = 0;
            }

            countArray[i] += countArray[i -1];
        }

        var outputArray = [...temp];



        for ( var i = temp.length - 1; i >= 0; i--){
            if (temp[i] === undefined){
                temp[i] = 0;
            }

            await delay(500);

            var bar_outputSlot = document.getElementById(countArray[ temp[i]] - 1 );
            bar_outputSlot.style.backgroundColor = "blue";

            var bar_i = document.getElementById(i);
            bar_i.style.backgroundColor = "lightblue";

            await delay(500);

            outputArray[ countArray[ temp[i]] - 1 ] = temp[i];
            countArray[temp[i]]--;

            await delay(500);
            setArrayToSort([...outputArray]);

            await delay(500);
            bar_outputSlot.style.backgroundColor = "";
            bar_i.style.backgroundColor = "";

        } }
        catch(error){
            console.log(error);
        }

        await delay(500);
        setArrayToSort([...outputArray]);
        setIsSorting(false);

    }


    return (
        <div className="SortBox">
        <div className="sortAlgoTitleContainer">
        Count Sort
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
       {/*  <button className="SortButtons" onClick={logArray}>Log Array</button> */}
        { /*  <button className="SortButtons" onClick={() => sortArray(arrayToSort)}>Test Merge Sort</button> */ }

        </div>
    </div>
    );
}

export default CountSort;