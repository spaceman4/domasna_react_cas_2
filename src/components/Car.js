const Car = (props) => {
  return (
    <div id='Carz'>
      <ul>
        <li>Type is: {props.carInfo.type}</li>
        <li>Model is: {props.carInfo.model}</li>
        <li>Color is: {props.carInfo.color}</li>
        <li>Hatchback: {props.carInfo.hatchback === true ? 'Yes' : 'No'}</li>
        <li>
          It has:{' '}
          {props.carInfo.hatchback
            ? props.carInfo.doors + 1
            : props.carInfo.doors}{' '}
          doors
        </li>
      </ul>
    </div>
  );
};

export default Car;

// const Car = ({ carInfo }) => {
//   const { type, model, color, doors, hatchback } = carInfo;
//   return (
//     <div id="Carobject">
//       <p>Type is: {type}</p>
//       <p>Model is: {model}</p>
//       <p>Color is: {color}</p>
//       <p>It has: {hatchback ? doors + 1 : doors} doors</p>
//     </div>
//   );
// };

// export default Car;
