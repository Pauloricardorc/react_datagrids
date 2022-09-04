import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;

  .row-recente {
    background: rgb(1, 129, 100, 0.2);

    &:hover {
      cursor: pointer;
      background: rgb(1, 129, 100, 0.5);
      transition: 0.1s ease-in-out background;
    }
  }

  .status-recente {
    .container-status {
      /* background: rgb(50, 290, 100, 0.3); */
      background: rgb(70, 220, 70, 1);
      color: #F6F6F9;
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