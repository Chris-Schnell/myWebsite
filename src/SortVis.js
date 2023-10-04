import React, { Component } from 'react';
import BubbleSort from './BubbleSort';
import SelectionSort from './SelectionSort';
import InsertionSort from './InsertionSort';
import MergeSort from './MergeSort';
import QuickSort from './QuickSort';
import HeapSort from './HeapSort';
import CountSort from './CountSort';
import RadixSort from './RadixSort';

class SortVis extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedAlgorithm: 'bubbleSort', // Default selected algorithm
        };
      }

       // Function to set the selected sorting algorithm
    selectAlgorithm = (algorithm) => {
    this.setState({ selectedAlgorithm: algorithm });
    };


    renderSortingComponent() {
        const { selectedAlgorithm } = this.state;
    
        // Render the selected sorting component based on the state
        switch (selectedAlgorithm) {
          case 'bubbleSort':
            return <BubbleSort />;
          case 'selectionSort':
            return <SelectionSort />;
          case 'insertionSort':
            return <InsertionSort />;
          case 'mergeSort':
            return <MergeSort />;
          case 'quickSort':
            return <QuickSort />;
          case 'heapSort':
            return <HeapSort />;
          case 'countSort':
            return <CountSort />;
          case 'radixSort':
            return <RadixSort />;
          // Add more cases for other sorting algorithms as needed
          default:
            return null;
        }
      }


    render() {
        return (
            <div className="SortVisTopContainer">

<div className='sortVisCheckBoxContainer'>
    <div className='sortVisCheckBoxLabelContainer'>
            <label className='sortVisCheckBoxLabel'>
          <input
            type="radio"
            name="algorithms"
            // Set the checkbox state
            onChange={() => this.selectAlgorithm('bubbleSort')} // Handle checkbox changes
          />
          Bubble Sort
            </label>
            
            <label className='sortVisCheckBoxLabel'>
          <input
            type="radio"
            name="algorithms"
            // Set the checkbox state
            onChange={() => this.selectAlgorithm('selectionSort')} // Handle checkbox changes
          />
          Selection Sort
            </label>

            <label className='sortVisCheckBoxLabel'>
          <input
            type="radio"
            name="algorithms"
            // Set the checkbox state
            onChange={() => this.selectAlgorithm('insertionSort')} // Handle checkbox changes
          />
          Insertion Sort
            </label>


            <label className='sortVisCheckBoxLabel'>
          <input
            type="radio"
            name="algorithms"
            // Set the checkbox state
            onChange={() => this.selectAlgorithm('mergeSort')} // Handle checkbox changes
          />
          Merge Sort
            </label>


            <label className='sortVisCheckBoxLabel'>
          <input
            type="radio"
            name="algorithms"
            // Set the checkbox state
            onChange={() => this.selectAlgorithm('quickSort')} // Handle checkbox changes
          />
          Quick Sort
            </label>


            <label className='sortVisCheckBoxLabel'>
          <input
            type="radio"
            name="algorithms"
            // Set the checkbox state
            onChange={() => this.selectAlgorithm('heapSort')} // Handle checkbox changes
          />
          Heap Sort
            </label>


            <label className='sortVisCheckBoxLabel'>
          <input
            type="radio"
            name="algorithms"
            // Set the checkbox state
            onChange={() => this.selectAlgorithm('countSort')} // Handle checkbox changes
          />
          Count Sort
            </label>


            <label className='sortVisCheckBoxLabel'>
          <input
            type="radio"
            name="algorithms"
            // Set the checkbox state
            onChange={() => this.selectAlgorithm('radixSort')} // Handle checkbox changes
          />
          Radix Sort
            </label>




            </div>

            </div>
            <div className="SortVisSortContainer">

                

            {/* 
            <button onClick={() => this.selectAlgorithm('bubbleSort')}>Bubble Sort</button>
        <button onClick={() => this.selectAlgorithm('selectionSort')}>Selection Sort</button> */}

                <div className="SortVisMid">
                {this.renderSortingComponent()}
                </div>

                <div>

            
            {/* Add more buttons for other sorting algorithms */}
          </div>

            </div> </div>
        );
    }
}

export default SortVis;