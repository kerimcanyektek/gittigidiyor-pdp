import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Arial, sans-serif;
`;

export const TopNav = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 5px 0;
  font-size: 12px;
`;

export const TopNavLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }

  .blue-link {
    color: #0055cc;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: white;
`;

export const SearchInput = styled.input`
  flex: 1;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 0 10px;
`;

export const SearchButton = styled.button`
  background-color: #0055cc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const AccountCartContainer = styled.div`
  display: flex;
  gap: 15px;

  button {
    background: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 10px 0;
  font-size: 14px;
`;

export const CategoryItem = styled.div`
  margin: 0 10px;
  padding: 5px 10px;
  cursor: pointer;
  color: #333;

  &:hover {
    border-bottom: 2px solid #0055cc;
  }

  &.active {
    border-bottom: 2px solid #0055cc;
    color: #0055cc;
    font-weight: bold;
  }
`;
