import { BrowserRouter , Route, Routes  } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AllRecipesDisplay from './components/AllRecipesDisplay';
import NavBar from './components/NavBar';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <div className="App">
    <Routes>
    <Route path="/" element={<AllRecipesDisplay/>}  />
    <Route path="/Recipe/:title" element={<RecipeDetails/>}  />
    {/* <Route path="/categories" component={Categories} exact />
    <Route path="/meals/:categoryType" component={Meals} exact /> */}
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
