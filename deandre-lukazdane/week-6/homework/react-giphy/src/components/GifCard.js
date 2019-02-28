import React from "react";

const GifCard = props => {
  //let GifCard;
  // class GifCard extends Component {
  //   render() {
  return (
    <div onLoad={console.log("It search")}>
      <h1>{props.gifcard.title}</h1>
      <img
        src={props.gifcard.images.fixed_height.url}
        alt={props.gifcard.title}
      />
    </div>
  );
}; //}

//export default GifCard;

// import React from "react";

// const gifcard = props => {
//   return (
//     <div className="container">
//       <h2>{props.gifcard.title}</h2>
//       <img
//         className="card-img-top"
//         src={props.gifcard.images.fixed_height.url}
//         alt={props.gifcard.titl}
//       />
//     </div>
//   );
// };

export default GifCard;
