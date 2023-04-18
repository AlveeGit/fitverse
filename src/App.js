import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Plans from './Components/Plans/Plans';
import Progress from './Components/Progress/Progress';




function App() {
  const [exerciseTime, setExerciseTime] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = (price) =>
  {
    setCart(price);
  }

  const addToList = (time, fee) => {
    let newTime = exerciseTime + time ;
    setExerciseTime(newTime);
    let newCart = parseFloat(cart + fee);
    setCart(newCart); 
  }

  return (
    <div className="App flex flex-row relative">
      <div className='basis-1/4'>
        <Cart 
        cart={cart} 
        exerciseTime={exerciseTime}
        ></Cart>
      </div>
      <div className='basis-3/4'>
        <NavBar></NavBar>
        <Courses addToList={addToList}></Courses>
        <Plans addToCart={addToCart}></Plans>
        <Progress></Progress>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
