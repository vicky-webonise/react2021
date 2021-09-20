const CardImage = function (props) {
  // console.log(props);
  return (
    <div>
      Card Image child component <img src={props.imgsrc} alt="Alt Tag" />
    </div>
  );
}

export default CardImage;
