import Header from "./components/Header";
import Main from "./components/Main";
import FooterBlue from "./components/FooterBlue";
import Footer from "./components/Footer";
import FooterLink from "./components/FooterLink";

const HeaderLinks = [
  "Characters",
  "Comics",
  "Movies",
  "Tv",
  "Games",
  "Collectibles",
  "Videos",
  "Fans",
  "News",
  "Shop",
];

function App() {
  return (
    <>
      <Header links={HeaderLinks} />
      <Main />
      <FooterBlue />
      <Footer />
      <FooterLink />
    </>
  );
}

export default App;
