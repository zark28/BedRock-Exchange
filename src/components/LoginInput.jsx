import React from 'react';
import styled from 'styled-components';
const Input = ({
  autocomplete,
  label,
  type,
  id,
  name,
  placeholder,
  onChange,
  value,
  icon,
  onClick,
  children,
}) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <Span>
        {children}
        <FormInput
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          autoComplete={autocomplete}
        />
        {name === 'password' ? <button onClick={onClick}>{icon}</button> : ''}
      </Span>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 10px 0 20px 0;
  label {
    color: #29325a;
    font-size: 1.2rem;
  }
`;
const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #a9adbd;
  padding: 10px;
  margin-top: 5px;
  button {
    outline: none;
    width: fit-content;
    height: fit-content;
    border: none;
    font-size: 1.2rem;
  }
`;

const FormInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 1.5rem;
  color: #1a284d;
  background: transparent;
`;

export default Input;
