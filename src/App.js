import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Product from "./Component/Product";
import Cart from "./Component/Cart"
import Header from './Component/Header';
function App() {

    return(

    <div className="App">  
    <Router>
    <Header/>
    <Routes>
    <Route path='/' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </Router>  
    </div>
)
}

export default App;
