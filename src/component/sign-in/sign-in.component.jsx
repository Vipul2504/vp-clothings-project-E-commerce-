import { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign.in.style.scss'
class SignIn extends Component {
    constructor(props){
        super(props);


        this.state = {
            email: '',
            password:''
        }
    }

    handleSumbit = event =>{
        event.preventDefault();

        this.setState({email:"", password:""})
    }

    handleChange = event => {
        const {value , name} = event.target;

        this.setState({[name]:value})
    }
    

    render() {
        return (
             <div className="sign-in">
                 <h2>I already have an Account</h2>
                 <span>Sing in with your email and password</span>

                 <form onSubmit={this.handlesumbit}>
                     <FormInput name="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
                    
                     <FormInput name="password" label="password" type="password" value={this.state.password}  handleChange={this.handleChange} required/>
                    

                     <CustomButton type="submit">Sign in</CustomButton>
                 </form>
             </div>
        );
    }
}

export default SignIn;