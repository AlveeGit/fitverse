import './App.css';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Plans from './Components/Plans/Plans';
import Progress from './Components/Progress/Progress';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Courses></Courses>
      <Plans></Plans>
      <Progress></Progress>
      <Footer></Footer>
    </div>
  );
}

export default App;
