import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();
    const isSpotifyNavbar = location.pathname === '/SpotifyStats';

    return (
        <div className={`NavbarContainer ${isSpotifyNavbar ? 'SpotifyNavbarContainer' : ''}`}>
            <div className="NavMiddleContainer">
                <Link to="/" className="NavbarButtons">Home</Link>
                <Link to="/About" className="NavbarButtons">About</Link>
                <Link to="/SortingVisualizer" className="NavbarButtons">Sorting Visualizer</Link>
                <Link to="/SpotifyStats" className="NavbarButtons">Spotify Stats</Link>
              {/*   <Link to="/WorkoutTracker" className="NavbarButtons">Workout Tracker</Link> */}
            </div>
        </div>
    );
};

export default Navbar;