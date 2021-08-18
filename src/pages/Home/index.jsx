import Body from "../../components/Body";
import NavBar from "../../components/NavBar";
import Titulo from "../../components/Titulo";

const Home = () => {
  return (
    <>

      <header>
        <NavBar />
        <Titulo titulo="Habilidades" />
      </header>

      <section className="row">
        <Body />
      </section>
    </>
  );
};

export default Home;
