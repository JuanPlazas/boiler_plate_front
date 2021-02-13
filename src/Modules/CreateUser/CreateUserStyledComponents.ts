import styled, { css } from 'styled-components';

import UtilsComponent from '../../utils/styledComponents';

export default {
  ...UtilsComponent,

  Container: styled(UtilsComponent.ContainerColumnCenter)`
    color: #34A001;
  `,

  ContainerData: styled(UtilsComponent.ContainerRowCenter)`
      width: 30%;
      margin: 20px;
      justify-content: space-between;
  `,

  Label: styled("p")`
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    font-size: 15px
  `,

  Input: styled("input")``,

  Button: styled("button") <{ create?: boolean }>`
    background: ${props => props.create ? '#34A001' : 'transparent'};
    border-radius: 3px;
    border: 2px solid #34A001;
    color: ${props => props.create ? 'white' : '#34A001'};
    cursor: pointer;
  `,
}
