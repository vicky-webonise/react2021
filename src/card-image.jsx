const CardImage = function (props) {
  // console.log(props);
  return (
    <div>
      <img src={props.imgsrc} alt="Alt Tag" class="card-img-top" />
      Card Image child component
    </div>
  );
}

export default CardImage;
