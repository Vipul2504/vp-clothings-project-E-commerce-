import { Switch ,Route } from 'react-router-dom';
import Homepage from "./component/pages/Homepage/Homepage.component";
import ShopPages from "./component/pages/Shoppage/Shop.component";

function App(){
  return(
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Shop" component={ShopPages} />
      </Switch>
    </div>
  )
}

export default App;