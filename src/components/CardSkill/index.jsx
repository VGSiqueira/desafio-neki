import "./styles.css";

const CardSkill = ({ source, skillName, skillDescription, version, level }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0 p-3">
        <div className="boxImg col-md-4">
            <img src={source} className="img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{skillName}</h5>
            <p className="card-text">{skillDescription}</p>
            <p className="card-text">
              <small className="text-muted">Versão: {version}</small>
            </p>
            <p className="card-text">
              <small className="text-muted">Nível da habilidade: {level}</small>
            </p>
            <button className="btn btn-warning">Editar</button>
            <button className="btn btn-danger ms-2">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardSkill;
