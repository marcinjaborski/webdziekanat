import styled from 'styled-components';

export const HomePageStyled = styled.div`
  .tileContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .MuiPaper-root {
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    text-align: center;
    color: white;
  }
  .MuiPaper-root:hover {
    filter: brightness(0.8);
  }
  .MuiPaper-root svg {
    font-size: 3em;
  }
  a:hover {
    text-decoration: none;
  }
`;
