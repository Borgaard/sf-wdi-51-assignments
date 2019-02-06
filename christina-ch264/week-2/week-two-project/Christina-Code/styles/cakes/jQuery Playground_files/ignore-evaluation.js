//// DO NOT MODIFY ///
//// DO NOT MODIFY ///
//// DO NOT MODIFY ///

if (!window.problem_set) {
  alert("You broke the lab!")
}

var results = [],
    warnings = [];

for (var k in problem_set) {
  let problem = problem_set[k]

  if (problem instanceof Question) {

    results.push({
      prompt: k.replace(/_/g, " "),
      "is my answer correct?": problem.isCorrectAnswer() ? "yes" : "no"
    })

  } else {

    warnings.push(
      `Woops! Looks like you overwrote a question instead of answering it!
      Fix your code to say: \`problem_set.${k} = \"YOUR ANSWER HERE\";\``
    );

  }

}

console.table(results);

warnings.forEach(function(w){
  console.warn(w);
});
