import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import {
  SignInContainer,
  TitleSignin,
  ButtonsContainer
} from './sign-in.styles';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    }

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <TitleSignin>I already have an account</TitleSignin>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type='email'
            name='email'
            label='email'
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type='password'
            name='password'
            label='password'
            value={this.state.password}
            required
          />
          <ButtonsContainer>
            <CustomButton type='submit'>sign in</CustomButton>
            <CustomButton
              type='button'
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              sign in with google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
