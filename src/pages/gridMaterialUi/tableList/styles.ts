import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;

  .row-recente {
    background: rgb(1, 129, 100, 0.2);
    cursor: pointer;

    &:hover {
      background: rgb(1, 129, 100, 0.3) !important;
      transition: 0.1s ease-in-out background;
    }
  }

  .status-recente {
    .container-status {
      border: 1px solid rgb(70, 220, 70, 1);
      color: #22CC69;
      font-weight: 100;
    }
  }
  .container-status {
    width: 4.5rem;
    height: 1.4rem;
    background: transparent;
    border: 1px solid #ECECEE;
    color: #858585;
  }
`