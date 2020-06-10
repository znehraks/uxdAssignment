import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content:center;
  border: none;
  background-color: rgba(0,0,0,0.8);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: "576px") {
      width: 100%;
    }
  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: "#0D0C1D";
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: "576px") {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: "#343078";
    }
  }
`;