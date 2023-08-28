import Navbar from "./components/navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HomePage />
    </>
  );
};

export default App;
