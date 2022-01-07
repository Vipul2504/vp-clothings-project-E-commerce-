import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./component/pages/Homepage/Homepage.component"
import ShopPages from "./component/pages/Shoppage/Shop.component";
import './App.css'
import Header from './component/header/Header.component';
import SigninandSignUppage from './component/pages/signin-and-signup/signin-and-singup';
import { Component } from 'react';
import { auth, createUserProfileDocument } from './firebas/firebas.utils';
// import firebase from '@firebase/app';
require('firebase/auth');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //         this.setState({
  //           currentUser: {
  //             id: snapShot.id,
  //             ...snapShot.data()
  //           }
  //         })
  //         console.log(this.state);
  //       })
  //       
  //     }
  //         this.setState({ currentUser: userAuth });
  //   })
  // }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/Shop" component={ShopPages} />
            <Route path="/Sign" component={SigninandSignUppage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}


export default App;