import Body from "../../components/Body";
import Titulo from "../../components/Titulo";

const Home = () => {
  return (
    <>
      <header>
        <Titulo titulo="Habilidades" />
      </header>

      <section className="row">
        <Body />
      </section>
    </>
  );
};

export default Home;
