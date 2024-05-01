import styled from "styled-components"

export const StyledScrollEffect = styled.div`
    width: 100px;
    height: 100px;
    background-color: blue;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: left 0.5s ease;
  }

  @media (min-height: 400px) { /* Adjust the threshold as needed */
    .scroll-effect.moved {
      left: calc(50% + 100px); /* Adjust the distance as needed */
    }
`