import CardImage from './card-image';

function Card(props) {
  // console.log(props);
  return (
    <div className="card">
      <CardImage imgsrc={props.imgsrc} alt="Alt Tag" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.title}</p>
        <a href={props.link} className="btn btn-primary">
          Watch
        </a>
      </div>
    </div>
  );
};

export default Card;
