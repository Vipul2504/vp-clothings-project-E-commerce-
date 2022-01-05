import { Switch , Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./component/pages/Homepage/Homepage.component"
import ShopPages from "./component/pages/Shoppage/Shop.component";
import './App.css'
import Header from './component/header/Header.component';
import SigninandSignUppage from './component/pages/signin-and-signup/signin-and-singup';

function App(){
  return(
    <div>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route path="/Shop" component={ShopPages} />
        <Route path="/Sign" component={SigninandSignUppage} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;