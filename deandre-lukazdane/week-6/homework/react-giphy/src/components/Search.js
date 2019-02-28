import React from "react";

//var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
// handleChange = () => {
//   console.log(this);
// };
const Search = props => {
  //class Search extends Component {
  //render() {
  return (
    <div>
      {/* <form> */}
      <input
        type="text"
        placeholder="Search here..."
        onKeyUp={event => console.dir(event.props)}
      />
      {/* <button type="submit">Submit</button> */}
      {/* </form> */}
    </div>
  );
};
//}

export default Search;
