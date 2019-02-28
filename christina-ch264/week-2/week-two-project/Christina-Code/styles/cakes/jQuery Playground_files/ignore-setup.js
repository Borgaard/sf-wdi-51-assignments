//// DO NOT MODIFY ///
//// DO NOT MODIFY ///
//// DO NOT MODIFY ///

function removeCanary(){
  $("#canary").remove();
}
function Question(q, getAnswer, check_dom_for_answer) {
  this.question = q;
  this.answer = null; // user submitted answer
  this.getAnswer = getAnswer;
  this.check_dom_for_answer = check_dom_for_answer || false;
}
Question.problem_set = window.problem_set = {};
Question.build = function(){
  var q = new this(...arguments);
  this.problem_set[q.question] = q;
}
Question.prototype = {
  isCorrectAnswer: function(){
    if (this.check_dom_for_answer) {
      // Verify that the desired change has occured in the DOM.
      return this.getAnswer();
    }

    this.correct_answer = this.getAnswer();

    // compare equality of primitive values (no dom nodes!)
    if ( ['string', 'number', 'undefined'].includes(typeof this.correct_answer) ) {
      return (this.answer === this.correct_answer);
    }

    // compare equality of DOM nodes (regardless of $ vs. vanilla)
    return $(this.correct_answer).is(this.answer);
  }
}


Question.build("how_many_h1_tags_are_on_the_page", function answer(){
  return $("h1").length;
});

Question.build("how_many_p_tags_are_on_the_page", function answer(){
  return $("p").length;
});

Question.build("grab_all_the_colorful_message_elements", function answer(){
  return $(".alert");
});

Question.build("grab_the_red_message_element", function answer(){
  return $(".alert-danger");
});

Question.build("grab_the_blue_message_element", function answer(){
  return $(".alert-info");
});

Question.build("what_time_is_on_the_page", (function setup(){
  var d = new Date(),
      h = d.getHours(),
      m = pad(d.getMinutes(),2),
      s = pad(d.getSeconds(),2),
      time = `${h}:${m}:${s}`;

  $(".time").text(time);

  return function answer(){
    return time;
  };

  ////

    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
}()));

Question.build("how_tall_is_the_image_in_pixels", function answer(){
  return $("img").height();
});

Question.build("how_wide_is_the_image_in_pixels", function answer(){
  return $("img").width();
});

Question.build("what_is_the_image_url", (function setup(){
  var choices = [
    "https://imgs.xkcd.com/comics/voyager_1.png",
    "https://imgs.xkcd.com/comics/bumblebees.png",
    "https://imgs.xkcd.com/comics/island_color.jpg"
  ];

  var random = Math.round(Math.random()*10) % choices.length;
  var url = choices[random];
  $("img").attr("src", url);

  return function answer(){
    return url;
  }

}()));

Question.build("what_does_the_question_field_say", (function setup(){
  var original_value = $("input#question").val();
  return function() {
    return original_value;
  }
}()));

Question.build("replace_the_question_field_with_the_word_yes", function(){
  return $("input#question").val().match(/yes/i)
}, true)

Question.build("what_is_the_sum_of_the_two_numbers", (function setup(){
  var total = 0;

  $("input.add-me").each(function(){
    var n = Math.round((Math.random()*10));
    $(this).val( n );
    total += n;
  })

  return function answer(){
    return total;
  }
}()));


Question.build("modify_the_dom_to_display_the_result_of_the_addition", function answer(){
  var total = 0;
  $("input.add-me").each(function(){
    total += +$(this).val();
  });

  return +$("#total").val() === total;
}, true);


Question.build("grab_the_red_queen", function answer(){
  return $("#chessboard .glyphicon-queen.red")
})

Question.build("grab_the_square_the_red_queen_is_in", (function setup(){
  var original_square = $("#chessboard .glyphicon-queen.red").parent(".square");
  return function answer() {
    return original_square;
  }
}()));

Question.build("remove_the_endangered_class_from_the_red_queens_square", function answer(){
  return $(".endangered").length === 0;
}, true);

Question.build("move_the_red_queen_to_safety", function answer(){
  var queen_is_safe = $(".glyphicon-queen.red").length && !$(".square:eq(0)").children(".glyphicon-queen.red").length;

  if (queen_is_safe) {
    // easter egg
    $("p").text("NICE WORK! You got it!")
  }

  return queen_is_safe;
}, true);
