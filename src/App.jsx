import "./App.css";
import HeaderBannerSmall from "./components/HeaderBannerSmall/HeaderBannerSmall";
import Header from "./components/Header/Header";
import PageBody from "./components/PageBody/PageBody";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <HeaderBannerSmall />
      <PageBody />
      <Footer />
    </>
  );
}

export default App;
