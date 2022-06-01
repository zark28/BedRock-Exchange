import React from 'react';
import styled from 'styled-components';
const Input = ({
  id,
  label,
  type,
  ref,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <InputItem className="flex flex-col w-3/4 items-centre justify-between border-b-2 py-2 ">
      <label htmlFor={id}>{label}</label>
      <input
        className="w-full bg-transparent border-0 outline-none text-lg p-2 text-secondaryColor "
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        ref={ref}
      />
    </InputItem>
  );
};
const InputItem = styled.div``;
export default Input;
