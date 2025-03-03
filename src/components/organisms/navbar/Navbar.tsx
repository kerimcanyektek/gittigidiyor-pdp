import {
  NavbarContainer,
  TopNav,
  TopNavLinks,
  MiddleNav,
  LogoContainer,
  Logo,
  SearchContainer,
  CategoryWrapper,
  SearchInput,
  SearchButton,
  IconContainer,
  BottomNav,
  CategoryItem,
} from "./Navbar.styles";

import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <NavbarContainer>
      <TopNav>
        <TopNavLinks>
          <a href="#">Süper Fiyatlar</a>
          <a href="#">Tüm Kampanyalar</a>
          <a href="#">Yurt Dışı Alışveriş</a>
          <a href="#">Kazananlar Kulübü</a>
          <a href="#">Satış Yap</a>
          <a href="#">Mağaza Aç</a>
          <a href="#">Bize Ulaşın</a>
          <a href="#">İade Süreci</a>
          <a href="#">Sipariş Takibi</a>
        </TopNavLinks>
      </TopNav>

      <MiddleNav>
        <LogoContainer>
          <Logo
            src="src\assets\gittigidiyor-logo.svg"
            alt="GittiGidiyor Logo"
          />
        </LogoContainer>
        <SearchContainer>
          <FaSearch />
          <SearchInput type="text" placeholder="Keşfetmeye Bak" />
          <SearchButton>BUL</SearchButton>
        </SearchContainer>
        <IconContainer>
          <div>
            <div className="icon-wrapper">
              <FaUser />
            </div>
            <div className="text-container">
              <span>Giriş Yap</span>
              <small>veya Üye Ol</small>
            </div>
          </div>
          <div>
            <div className="icon-wrapper">
              <FaShoppingCart />
            </div>
            <div className="text-container">
              <span>Sepetim</span>
            </div>
          </div>
        </IconContainer>
      </MiddleNav>

      <BottomNav>
        <CategoryWrapper>
          <CategoryItem>Elektronik</CategoryItem>
          <CategoryItem>Ev, Bahçe, Ofis, Yapı Market</CategoryItem>
          <CategoryItem>Moda</CategoryItem>
          <CategoryItem>Kozmetik, Kişisel Bakım</CategoryItem>
          <CategoryItem>Anne, Bebek</CategoryItem>
          <CategoryItem>Süpermarket, Evcil Hayvan</CategoryItem>
          <CategoryItem>Kitap, Müzik, Oyuncak, Hobi</CategoryItem>
          <CategoryItem>Otomobil, Motosiklet</CategoryItem>
          <CategoryItem>Spor, Outdoor</CategoryItem>
        </CategoryWrapper>
      </BottomNav>
    </NavbarContainer>
  );
};

export default Navbar;
