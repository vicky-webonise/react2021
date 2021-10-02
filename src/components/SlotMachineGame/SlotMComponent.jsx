const SlotM = (props) => {
  // let x = 'vicky';
  // let y = 'vicky';
  // let z = 'vicky';

  let x = props.x;
  let y = props.y;
  let z = props.z;

//   {x === y && y === z ? (
//     <>
//       <h4>
//         {x} {y} {z}
//       </h4>
//       <h3>Matching</h3>
//       <hr />
//     </>
//   ) : (
//     <>
//       <h4>
//         {x} {y} {z}
//       </h4>
//       <h3>Not Matching</h3>
//       <hr />
//     </>
//   );
// }

  if (x === y && y === z) {
    return (
      <>
        <h4>
          {x} {y} {z}
        </h4>
        <h3>Matching</h3>
        <hr />
      </>
    );
  } else {
    return (
      <>
        <h4>
          {x} {y} {z}
        </h4>
        <h3>Not Matching</h3>
        <hr />
      </>
    );
  }
};

export default SlotM;
