import styled, { css } from 'styled-components';

export default {
  Title: styled.h1`
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    font-size: 40px
  `,

  ContainerColumnCenter: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  ContainerRowCenter: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
}
