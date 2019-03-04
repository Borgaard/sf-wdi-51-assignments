export function getGiphyUrl(input) {
  const formattedInput = input.replace(/ /g, "+");

  return (
    "http://api.giphy.com/v1/gifs/search?q=" +
    formattedInput +
    "&api_key=ATf1CWHzKYMYJFRYFqGW1iXwph30oj17"
  );
}
