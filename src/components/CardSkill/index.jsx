import "./styles.css";

const CardSkill = () => {
  return (
    <div className="card mb-3">
      <div className="row g-0 p-5">
        <div className="col-md-4">
          <img
            src="https://i.imgur.com/vxcTbHn.png"
            className="img img-fluid rounded-start mx-auto"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">CSS</h5>
            <p className="card-text">
              é uma "folha de estilo" composta por “camadas” e utilizada para
              definir a apresentação (aparência) em páginas da internet que
              adotam para o seu desenvolvimento linguagens de marcação (como
              XML, HTML e XHTML).
            </p>
            <p className="card-text">
              <small className="text-muted">Versão: </small>
            </p>
            <p className="card-text">
              <small className="text-muted">Nível da habilidade: </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardSkill;
