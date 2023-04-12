import './App.css';
import Courses from './Components/Courses/Courses';
import NavBar from './Components/NavBar/NavBar';
import Plans from './Components/Plans/Plans';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Courses></Courses>
      <Plans></Plans>
    </div>
  );
}

export default App;
