import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom";
import Home from './Home';
import SortVis from './SortVis';
import WorkoutTracker from './WorkoutTracker';
import CreateWorkout from './CreateWorkout';
import WorkoutHistory from './workoutHistory';
import AnalyzeWorkouts from './AnalyzeWorkouts';
import About from './About';
import SpotifyStats from './SpotifyStats';


function App() {
  
  
  return (
    <div className="AppContainer">
      <Navbar/>

      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/SortingVisualizer" element={<SortVis/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/SpotifyStats" element={<SpotifyStats/>}></Route>
        { /*  <Route path="/WorkoutTracker" element={<WorkoutTracker/>}>
              <Route path="/WorkoutTracker/createWorkout" element={<CreateWorkout/>}></Route>
              <Route path="/WorkoutTracker/workoutHistory" element={<WorkoutHistory/>}></Route>
              <Route path="/WorkoutTracker/analyzeData" element={<AnalyzeWorkouts/>}></Route>
  </Route>  */}
      </Routes>
    </div>
  );
}

export default App;
