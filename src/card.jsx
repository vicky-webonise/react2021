import CardImage from './card-image';

function Card(props) {
  // console.log(props);
  return (
    <div class="card">
      <CardImage imgsrc={props.imgsrc} alt="Alt Tag" />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.title}</p>
        <a href={props.link} class="btn btn-primary">
          Watch
        </a>
      </div>
    </div>
  );
};

export default Card;
