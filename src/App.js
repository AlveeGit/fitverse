import './App.css';
import Cart from './Components/Cart/Cart';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Plans from './Components/Plans/Plans';
import Progress from './Components/Progress/Progress';




function App() {
  return (
    <div className="App flex">
      <div>
        <Cart></Cart>
      </div>
      <div>
        <NavBar></NavBar>
        <Courses></Courses>
        <Plans></Plans>
        <Progress></Progress>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
