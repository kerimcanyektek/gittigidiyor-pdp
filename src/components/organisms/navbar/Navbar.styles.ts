import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0055cc;
  color: white;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SearchBar = styled.input`
  flex: 1;
  max-width: 400px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin: 0 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;

  button {
    background: white;
    color: #0055cc;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
