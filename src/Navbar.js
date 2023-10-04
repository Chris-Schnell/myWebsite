import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='NavbarContainer'>
            <div className="NavMiddleContainer">
                <Link to="/" className="NavbarButtons">Home</Link>
                <Link to="/About" className="NavbarButtons">About</Link>
                <Link to="/SortingVisualizer" className="NavbarButtons">Sorting Visualizer</Link>
              {/*  <Link to="/WorkoutTracker" className="NavbarButtons">Workout Tracker</Link>  */}
            </div>
        </div>
    );
};

export default Navbar;