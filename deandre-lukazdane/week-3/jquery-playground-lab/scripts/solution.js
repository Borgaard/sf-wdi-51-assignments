/* SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW

SPOILERS BELOW
*/

// WHAT'S A PIRATE'S FAVORITE PROGRAMMING LANGUAGE?
// ANWSER: R
// AHA HAHA HA.

// THAR BE SPOILERS BEYOND THIS POINT. ARRR.

problem_set.how_many_h1_tags_are_on_the_page.answer = $("h1").length;

problem_set.how_many_p_tags_are_on_the_page.answer = $("p").length;

problem_set.grab_all_the_colorful_message_elements.answer = $(".alert");

problem_set.grab_the_red_message_element.answer = $(".alert-danger");

problem_set.grab_the_blue_message_element.answer = $(".alert-info")

problem_set.what_time_is_on_the_page.answer = $("h1 span").text();

problem_set.what_does_the_question_field_say.answer = $("input#question").val();

problem_set.replace_the_question_field_with_the_word_yes; // MODIFY THE DOM DIRECTLY!
$("input#question").val("yes");

problem_set.how_tall_is_the_image_in_pixels.answer = $("img").height();

problem_set.how_wide_is_the_image_in_pixels.answer = $("img").width();

problem_set.what_is_the_image_url.answer = $("img").attr("src");

var left = parseInt( $(".add-me").eq(0).val() );
var right = parseInt( $(".add-me").eq(1).val() );
var total = left + right;
problem_set.what_is_the_sum_of_the_two_numbers.answer = total;

problem_set.modify_the_dom_to_display_the_result_of_the_addition; // MODIFY THE DOM DIRECTLY!
$("input#total").val(total);

problem_set.grab_the_red_queen.answer = $("#chessboard .glyphicon-queen.red");

problem_set.grab_the_square_the_red_queen_is_in.answer = $("#chessboard .glyphicon-queen.red").parent(".square");

problem_set.remove_the_endangered_class_from_the_red_queens_square; // MODIFY THE DOM DIRECTLY!
$(".endangered").removeClass("endangered");

problem_set.move_the_red_queen_to_safety; // MODIFY THE DOM DIRECTLY!
$(".row:last-of-type .square:first-of-type").append($("#chessboard .glyphicon-queen.red"));
