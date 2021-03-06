import React from "react";
import styled from "styled-components";
import letters from '../data/letters.json';

import { colors } from "./GlobalStyles";

const LetterKey = (props) => {
  return <div> {
    letters.map((letter) => {
if (props.usedLetters.includes(letter)) {
  return <Wrapper disabled onClick={() => {
    props.handleGuess(letter)}}>{letter}</Wrapper>
} else {
      return <Wrapper onClick={() => {
        props.handleGuess(letter)}}>{letter}</Wrapper>
}
    })
    }
  </div>;
};

const Wrapper = styled.button`
  background: ${colors.green};
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  height: 50px;
  width: 50px;
  display: inline-block;
  /* justify-content: center;
  align-items: center; */
  margin: 4px;
  font-size: 32px;
  transition: all linear 400ms;

  &:hover {
    background: ${colors.fuchsia};
  }

  &:disabled,
  &:hover:disabled {
    background: #707070;
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export default LetterKey;


