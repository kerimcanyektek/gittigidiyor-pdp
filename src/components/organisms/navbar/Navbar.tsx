import {
  NavbarContainer,
  TopNav,
  TopNavLinks,
  SearchContainer,
  SearchInput,
  SearchButton,
  AccountCartContainer,
  CategoryMenu,
  CategoryItem,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <TopNav>
        <TopNavLinks>
          <a href="#">Yıldız Fırsatlar</a>
          <a href="#">Tüm Kampanyalar</a>
          <a href="#" className="blue-link">Yurt Dışı</a>
          <a href="#">Cadde</a>
          <a href="#">Satış Yap</a>
          <a href="#">Mağaza Aç</a>
          <a href="#">Bize Ulaşın</a>
          <a href="#">İade Süreci</a>
          <a href="#">Sipariş Takibi</a>
        </TopNavLinks>
      </TopNav>

      <SearchContainer>
        <img src="src/assets/gittigidiyor-logo.svg" alt="GittiGidiyor Logo" height="30" />
        <SearchInput type="text" placeholder="Keşfetmeye Bak" />
        <SearchButton>BUL</SearchButton>
        <AccountCartContainer>
          <button>Hesabım</button>
          <button>Sepetim</button>
        </AccountCartContainer>
      </SearchContainer>

      <CategoryMenu>
        <CategoryItem>Elektronik</CategoryItem>
        <CategoryItem>Ev, Bahçe, Ofis, Yapı Market</CategoryItem>
        <CategoryItem>Moda</CategoryItem>
        <CategoryItem>Kozmetik, Kişisel Bakım</CategoryItem>
        <CategoryItem>Bebek, Anne</CategoryItem>
        <CategoryItem>Süpermarket, Evcil Hayvan</CategoryItem>
        <CategoryItem>Kitap, Müzik, Oyuncak, Hobi</CategoryItem>
        <CategoryItem className="active">Otomobil, Motosiklet</CategoryItem>
        <CategoryItem>Spor, Outdoor</CategoryItem>
      </CategoryMenu>
    </NavbarContainer>
  );
};

export default Navbar;
