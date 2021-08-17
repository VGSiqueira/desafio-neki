import CardSkill from "../CardSkill";

const Body = () => {
  const skills = [
    {
      id: 1,
      name: "Java",
      version: "11",
      description:
        "Java é uma linguagem de programação e plataforma computacional lançada pela primeira vez pela Sun Microsystems em 1995.",
      image_url:
        "https://i.imgur.com/vxcTbHn.png",
    },
    {
      id: 2,
      name: "Javascript",
      version: "11",
      description:
        "JavaScript é uma linguagem de script orientada a objetos, multiplataforma. É uma linguagem pequena e leve. Dentro de um ambiente de host (por exemplo, um navegador web) o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles.",
      image_url:
        "https://i.imgur.com/vxcTbHn.png",
    },
  ];

  return (
    <div className="mb-3 col-10 mx-auto border p-5">
      <div className="addSkill container">
        <div className="row">
          <div className="col-lg-3 col-md-10 col-sm-12 ps-0">
            <div className="col-4 mt-2">
              <p>Selecionar:</p>
            </div>
            <select className="form-select my-1 me-3">
              <option value="0">Selecione uma habilidade...</option>
              {skills.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
          </div>
          <div className="col-lg-1 col-md-10 col-sm-12 ps-0">
            <div className="col-1 mt-2">
              <p>Nível:</p>
            </div>
            <select className="form-select my-1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div className="row">
            <button className="btn btn-primary col-lg-2 col-md-10 col-sm-12 mt-3">Adicionar</button>
        </div>
      </div>
        
        <section className="my-3">
            <CardSkill />
        </section>

    </div>
  );
};

export default Body;
