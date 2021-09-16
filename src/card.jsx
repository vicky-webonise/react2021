function Card(props) {
  // console.log(props);
  return (
      <li className={props.cName}>
        <img src={props.imgsrc} alt="Alt Tag" />
        <h2>{props.title}</h2>
        <h4>{props.sname}</h4>
        <a href={props.link}>Watch</a>
      </li>
  );
};

export default Card;
