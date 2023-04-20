import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Plans from './Components/Plans/Plans';
import Progress from './Components/Progress/Progress';
import Navbar1 from './Components/Navbar1/Navbar1';




function App() {
  const [exerciseTime, setExerciseTime] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = (price) => {
    setCart(price);
  }

  const addToList = (time) => {
    let newTime = exerciseTime + time;
    setExerciseTime(newTime);
  }

  return (

    <div className="App grid md:grid-cols-4 sm:grid-cols-3 relative">

      <div className='md:col-span-3 sm:col-span-2'>
        <Navbar1></Navbar1>
        <Courses addToList={addToList}></Courses>
        <Plans addToCart={addToCart}></Plans>
        <Progress></Progress>

        <Footer></Footer>
      </div>
      <div className=''>
        <Cart
          cart={cart}
          exerciseTime={exerciseTime}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
