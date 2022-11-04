import styled from "styled-components";

export const NavigationDrawerStyled = styled.div`
  .MuiDrawer-root {
    height: 100%;
    min-width: 350px;
  }

  .MuiPaper-root {
    z-index: 500;
    position: sticky;
  }

  button {
    justify-content: flex-start;
  }
`;
