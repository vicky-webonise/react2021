import SlotM from "./SlotMComponent";

// const SlotM = (props) => {
//   // let x = 'vicky';
//   // let y = 'vicky';
//   // let z = 'vicky';

//   let x = props.x;
//   let y = props.y;
//   let z = props.z;

//   if (x === y && y === z) {
//     return (
//       <>
//         <h4>
//           {x} {y} {z}
//         </h4>
//         <h3>Matching</h3>
//         <hr />
//       </>
//     );
//   } else {
//     return (
//       <>
//         <h4>
//           {x} {y} {z}
//         </h4>
//         <h3>Not Matching</h3>
//         <hr />
//       </>
//     );
//   }
// }


const SlotMachineGame = () => {
  return (
    <>
      <h2>Slot Machine Game</h2>
      <SlotM x="vicky" y="vicky" z="vicky" />
      <SlotM x="Sharvari" y="Sharvari" z="Sharvari" />
      <SlotM x="Ayush" y="vicky" z="vicky" />
      <SlotM x="Piyush" y="vicky" z="vicky" />
    </>
  );
}

export default SlotMachineGame;
