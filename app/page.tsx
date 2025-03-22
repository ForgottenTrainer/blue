import About from "./components/About";
import AboutCompany from "./components/AboutCompany";
import Certificate from "./components/Certificate";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Query from "./components/Query";
import Stage from "./components/Stage";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Query />
      <Stage />
      <AboutCompany />
      <Certificate />
    </>
  );
}
