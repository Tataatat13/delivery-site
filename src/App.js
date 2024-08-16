import './App.css';
import Dishes from './Components/DishesComponents/Dishes';
import Allcategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
          <div className='block'>
            <Allcategories/>
            <Cart/>
          </div>
          <div className='block'>
            <Dishes/>
          </div>
    </div>
  );
}

export default App;
