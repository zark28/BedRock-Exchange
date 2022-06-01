import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Line from './Line';
import LoginInput from './LoginInput';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { LoginContext } from '../context/LoginContext';
const fetchQuery = async ({ uri, method = 'GET', body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const LoginCard = () => {
  const [haveAcc, setHaveAcc] = useState(true);
  const [inputType, setInputType] = useState('password');

  const initValue = { email: '', password: '' };
  const [user, setUser] = useState(initValue);
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(LoginContext);

  // password visibility
  const handleShowPassword = (e) => {
    e.preventDefault();
    inputType === 'text' ? setInputType('password') : setInputType('text');
  };
  // setting value for inputs
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // setting forms for login and signup
  const handleHaveAcc = () => {
    haveAcc ? setHaveAcc(null) : setHaveAcc(true);
  };

  // handeling login and signup with Email
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(user);
    if (haveAcc)
      if (user.email && user.password) {
        const data = await fetchQuery({
          uri: 'http://localhost:4000/auth/login',
          method: 'POST',
          body: user,
        });
        if (data.message) {
          alert(data.message);
        }

        // setCurrentUser({ ...user });
        if (data.token) {
          setLogged(true);
          navigate('/admin');
        }
        setUser(initValue);
      } else {
        alert('Please enter all fields');
      }

    if (!haveAcc)
      if (user.email && user.password) {
        await fetchQuery({
          uri: 'http://localhost:4000/auth/register',
          method: 'POST',
          body: user,
        });

        setUser(initValue);
        setHaveAcc(true);
        // history.push("/login");
        alert('Accout Created successfuly');
      } else {
        alert('Please enter all fields');
      }
  };

  // handling continue with Google

  return (
    <Container className=" flex flex-col items-center justify-center bg-transparent border-2 text-secondaryColor border-secondaryColor shadow-2xl p-6 rounded-xl ">
      <Title className="w-full text-center my-8 text-2xl font-bold">
        BedRock Exchange
      </Title>
      {/* <GoogleLoginComponent /> */}
      {/* <button>Continue with Google</button> */}
      <FormOption>
        <Line />
        <p className="sign-email mx-3">
          {haveAcc ? 'Sign in with Email' : 'Sign up with Email'}
        </p>
        <Line />
      </FormOption>
      <FormOption className="mt-5">
        <div className="w-full flex justify-evenly items-center ">
          <p>{haveAcc ? 'Not registered yet?' : 'Already have an account? '}</p>
          <OptionButton
            onClick={handleHaveAcc}
            className="text-xl font-bold py-2 px-3 rounded-lg transition-all duration-75 text-primaryColor
       hover:text-textColor"
          >
            {haveAcc ? 'Create an Account' : 'Login'}
          </OptionButton>
        </div>
      </FormOption>
      <InputForm className="w-full mt-3 flex flex-col items-center justify-center gap-3">
        <LoginInput
          type="email"
          id="email"
          name="email"
          label="Email"
          value={user.email}
          placeholder="mary@example.com"
          onChange={handleChange}
          autocomplete="email"
        />
        <LoginInput
          type={inputType}
          id="password"
          name="password"
          label="Password"
          value={user.password}
          onChange={handleChange}
          onClick={handleShowPassword}
          icon={
            inputType !== 'text' ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
          }
          autocomplete={haveAcc ? 'current-password' : 'new-password'}
        />

        {haveAcc ? (
          <FormOption>
            <div className="check">
              <input
                type="checkbox"
                name="remember"
                defaultChecked
                className="mr-3"
              />
              Remember me
            </div>
            <a href="/"> Forgot Password?</a>
          </FormOption>
        ) : (
          ''
        )}
        <LogButton
          onClick={handleLogin}
          className="text-xl w-full text-center font-bold py-2 px-3 rounded-lg transition-all duration-75 text-primaryColor-white bg-primaryColor
       hover:text-textColor"
        >
          {haveAcc ? 'Login' : 'Sign Up'}
        </LogButton>
      </InputForm>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
`;
const Title = styled.h1``;
const InputForm = styled.form``;

const FormOption = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button``;
const LogButton = styled(Button)``;

const OptionButton = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
export default LoginCard;
