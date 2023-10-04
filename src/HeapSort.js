import {React, useState} from 'react';


    
function HeapSort() {

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

    async function sortArray( arrayInput ) {
        setIsSorting(true);
        var N = arrayInput.length;

        try {
 /*       console.log("------Starting Array-------");
        console.log(arrayInput);
        console.log("-------------"); */
        // Build heap ( rearrange array)
        for (var i = Math.floor( N / 2) - 1; i>= 0; i--){
            await heapify(arrayInput,N,i);
  /*          console.log("------(Building) Heapifyed: i = ", i ," ------");
            console.log(arrayInput);
            console.log("-------------");  */
        }
        
        
        //One by one extract an element from heap
        for (var i = N - 1; i > 0; i--){

            var bar_largest = document.getElementById(0)
            bar_largest.style.backgroundColor = "blue";

            var bar_largest = document.getElementById(i)
            bar_largest.style.backgroundColor = "blue";

            await delay(500);

            // Move current root to end
            var temp = arrayInput[0];
            arrayInput[0] = arrayInput[i];
            arrayInput[i] = temp;

            setArrayToSort([...arrayInput]);
            await delay(500);

            bar_largest.style.backgroundColor = "";
            bar_largest.style.backgroundColor = "";
            await delay(500);


 //           console.log("------(Reducing) After Swap / Before Heapify: i = ", i ," ------");
 //           console.log(arrayInput);

            // call max heapify on the reduced heap
            await heapify(arrayInput,i,0);
 /*           console.log("------(Reducing) Heapifyed: i = ", i ," ------");
            console.log(arrayInput);
            console.log("-------------"); */
        } }
        catch(error){
            console.log(error);
        }

        setArrayToSort([...arrayInput]);
        setIsSorting(false);
    }

    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    async function heapify(arr, N, i){
        
        var largest = i; // Initialize largest as root (just to start, this doesnt mean i is currently the largest)
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2

        // If left child is larger than root
        if (l < N && arr[l] > arr[largest])
            largest = l;


        // If right child is larger than largest so far
        if (r < N && arr[r] > arr[largest])
            largest = r;

        // If largest is not root
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            setArrayToSort([...arr]);
            await delay(500);

        // Recursively heapify the affected sub-tree
        heapify(arr, N, largest);
    }
     setArrayToSort([...arr]);
    await delay(500);     

    }


    return (
        <div className="SortBox">
        <div className="sortAlgoTitleContainer">
        Heap Sort
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

export default HeapSort;