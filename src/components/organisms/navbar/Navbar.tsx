import { NavbarContainer, Logo, SearchBar, ButtonsContainer } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>GittiGidiyor</Logo>
      <SearchBar type="text" placeholder="Ürün ara..." />
      <ButtonsContainer>
        <button>Giriş Yap</button>
        <button>Sepet</button>
      </ButtonsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
