import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background: #FFFFFF;
  border: 2px solid #F6F6F9;
  box-shadow: 5px 5px 5px rgb(0, 0, 0, .2);
  padding: 1.5rem;
  border-radius: 6px;

  .close-icon {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
    color: #FF2934;

    &:hover {
      filter: brightness(80%)
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 500px;
  }
`

export const ImageModal = styled.img`
  width: 30rem;
  height: 30rem;
`