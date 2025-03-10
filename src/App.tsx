import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import client from "./context/ApolloClient";
import GlobalStyles from "./styles/GlobalStyles"; 
import Home from "./pages/home/Home";
import ProductPage from "./pages/product-page/ProductPage";
import Navbar from "./components/organisms/navbar/Navbar";
const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
