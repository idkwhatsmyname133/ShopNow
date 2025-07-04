import styled from "styled-components";

export const Box = styled.div<{ width?: string | number; height?: string | number; borderRadius?: string }>`
  width: ${(props) => props.width || "100%"};
  height : ${(props) => props.height || "100%"};
  background: rgb(255, 255, 255); /* semi-transparent white */
  border-radius: ${(props) => props.borderRadius};                  /* smooth rounded corners */
  backdrop-filter: blur(10px);          /* glass blur effect */
  -webkit-backdrop-filter: blur(10px);  /* Safari support */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* soft shadow */
  border: 1px solid rgba(255, 255, 255, 0.3); /* subtle border */
`;
export const Frame = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Input = styled.input<{ backgroundColor?: string }>`
  border: none;
  color: #949494;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-size: 1.5rem;
  outline: none;
  font-weight: regular;
  width: 100%;

  &::placeholder {
    color:rgb(188, 188, 188);
  }
`;

export const Horizontal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const Gap = styled.div<{ gap?: string }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
`;