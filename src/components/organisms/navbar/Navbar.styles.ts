import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: white;
  border-bottom: 1px solid #ddd;
`;

export const TopNav = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0;
  font-size: 12px;
`;

export const TopNavLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 12px;
    &:hover {
      color: #3f7eff;
    }
  }
`;

export const MiddleNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 25px;
  padding: 10px;
  border: 1px solid #ddd;
  flex: 1;
  max-width: 500px;
  justify-content: space-between;

  input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 5px;
    outline: none;
    font-size: 14px;
  }
`;

export const SearchButton = styled.button`
  background-color: #3f7eff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 5px;

  &:hover {
    background-color: #3366cc;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    gap: 8px;
  }

  .icon-wrapper {
    width: 45px;
    height: 45px;
    background-color: #f5f5f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    font-size: 18px;
    color: #333;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .text-container span {
    font-size: 14px;
    font-weight: bold;
  }

  .text-container small {
    font-size: 10px;
    color: #777;
  }
`;

export const BottomNav = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: center;
  padding: 12px 0;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`;

export const CategoryItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 8px;
  cursor: pointer;
  color: #333;
  border-right: 1px solid #ddd;
  text-align: center;
  min-height: 40px;

  &:last-child {
    border-right: none;
  }

  &:hover {
    color: #3f7eff;
  }
`;
