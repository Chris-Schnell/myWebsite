import {React, useState} from 'react';

function RadixSort() {

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

    function getMax(arr,n)
{
    let mx = arr[0];
        for (let i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;
}   

async function countSort(arr,n,exp)
{
    let output = new Array(n); // output array
        let i;
        let count = new Array(10);
        for(let i=0;i<10;i++)
            count[i]=0;
 
        // Store count of occurrences in count[]
        for (i = 0; i < n; i++){
            let x = Math.floor(arr[i] / exp) % 10;
            count[x]++; }
 
        // Change count[i] so that count[i] now contains
        // actual position of this digit in output[]
        for (i = 1; i < 10; i++)
            count[i] += count[i - 1];
 
        // Build the output array
        for (i = n - 1; i >= 0; i--) {
            let x = Math.floor(arr[i] / exp) % 10;
            output[count[x] - 1] = arr[i];
            count[x]--;
        }
 
        // Copy the output array to arr[], so that arr[] now
        // contains sorted numbers according to current digit
        for (i = 0; i < n; i++) {
            arr[i] = output[i];
            setArrayToSort([...arr]);
            await delay(200);

            var j = i;
            var color = "";
            switch(exp){
                case 1:
                    j += 2000;
                    color = "purple";
                    break;
                case 10:
                    j+= 1000;
                    color = "magenta";
                    break;
                }
            
            var numText = document.getElementById(j);
            numText.style.backgroundColor = color;
            await delay (500);
        
        }

 }
  
    

  async  function sortArray() {
        setIsSorting(true);

       
        var n = arrayToSort.length;
        // Find the maximum number to know number of digits
        let m = getMax(arrayToSort, n);

        var temp = arrayToSort;


        try {
        // Do counting sort for every digit. Note that
        // instead of passing digit number, exp is passed.
        // exp is 10^i where i is current digit number
        for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10){
            await countSort(temp, n, exp);
            setArrayToSort([...temp]);
            await delay(500); }

        
        
        for (var k = 0; k < n; k++) {

                var numText = document.getElementById(k + 1000);
                var numText2 = document.getElementById(k + 2000);
                numText.style.backgroundColor = "";
                numText2.style.backgroundColor = "";
    
        }

    }
    catch(error){
        console.log(error);
    }

        setArrayToSort([...temp]);
        setIsSorting(false);
        
    }


    return (
        <div className="SortBox">
        <div className="sortAlgoTitleContainer">
        Radix Sort
        </div>
        <div className="barsContainer">
            {arrayToSort.map((bar, index) => {

                return (<div id={index} className='bar' key={index} style={{height: `${bar}%`}}> <div><span className='radixSortLeftNum' id={index + 1000} >{bar.toString()[0]}</span> <span className='radixSortRightNum' id={index + 2000} >{bar.toString()[1]}</span></div></div>)
            }

            )}
        </div>

        <div className="SortButtonsContainer">
        <button className="SortButtons" disabled={isSorting} onClick={() => sortArray()}>Sort Array</button>
        <button className="SortButtons" disabled={isSorting} onClick={resetBars}>Reset Bars</button>
        { /*    <button className="SortButtons" onClick={null}>Test Timeout</button> */ }
        { /*   <button className="SortButtons" onClick={logArray}>Log Array</button> */ }
        { /*  <button className="SortButtons" onClick={() => sortArray(arrayToSort)}>Test Merge Sort</button> */ }

        </div>
    </div>
    );
}

export default RadixSort;