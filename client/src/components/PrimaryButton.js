import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 6px;
  background: #222;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 14px;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #333;
    transition: all 0.4s ease;
  }
`;

function PrimaryButton({ name }) {
  return <ButtonStyled>{name}</ButtonStyled>;
}

export default PrimaryButton;
