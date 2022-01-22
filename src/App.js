import { Switch, Route, BrowserRouter ,Redirect} from 'react-router-dom';
import Homepage from "./component/pages/Homepage/Homepage.component"
import ShopPages from "./component/pages/Shoppage/Shop.component";
import './App.css'
import Header from './component/header/Header.component';
import SigninandSignUppage from './component/pages/signin-and-signup/signin-and-singup';
import { Component } from 'react';
import { auth, createUserProfileDocument } from './firebas/firebas.utils';
import {connect} from 'react-redux';
import {SetCurrentUser} from './redux/user/user.action.jsx'
// import firebase from '@firebase/app';
require('firebase/auth');

class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {SetCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          SetCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          console.log(this.state);
        });
      }

      SetCurrentUser( userAuth );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/Shop" component={ShopPages} />
            <Route  exact path="/Sign" render={()=>this.props.currentUser ? (<Redirect to='/'/>) : (<SigninandSignUppage/>)} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

// const mapToProps = user => {
//   console.log(user)
//  return { currentUser: currentUser}
// }

const mapStateToProps = user  => ({
  currentUser: this.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  SetCurrentUser: user => dispatch(SetCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
