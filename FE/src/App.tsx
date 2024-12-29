import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Browse from './pages/Browse';
// import LoginPage from "./pages/LoginPage";
// import RecipeDetails from './pages/RecipeDetails';
import CategoryDetails from './pages/CategoryDetails';
import SearchDetails from './pages/SearchDetails';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Browse />} />
       
        {/* <Route path="/login" element={<LoginPage />} />? */}
        <Route path="/search" element={<SearchDetails />} />
        <Route path="/recipe/:slug" element={<RecipeDetails />} />  
        <Route path="/category/:slug" element={<CategoryDetails />} />
      </Routes>
    </Router>
  );
}


export default App;