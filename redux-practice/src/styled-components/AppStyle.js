import styled from "styled-components"

export const MainContainer = styled.div`
    height: 100vh;
    display:grid;
    grid-template-areas:
    "header header header header"
    "sidebar cardcontainer cardcontainer cardcontainer"
    "sidebar cardcontainer cardcontainer cardcontainer"
    "sidebar footer footer footer";
    grid-template-rows: auto;
`;