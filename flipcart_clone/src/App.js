import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
