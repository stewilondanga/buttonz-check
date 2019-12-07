var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$(function() {
  //Change the size of the body to the size of the window.
  $("body").css({
    height: $(window).height(),
    width: $(window).width()
  });

  //Transitions on check of the checkbox for the box on the **left**.
  $("#checkfunc").click(function() {
    if ($(this).is(":checked")) {
      $("#checkmark").transit({ //Make the checkmark visible + jump into frame.

          opacity: 1, //Make it actually appear.
          boxShadow: "-3px 3px #ccc , -3px 0 #ccc , 0 3px #ccc", //Makes the body of the Checkmark.
          transform: "translatey(-3px) , rotate(-45deg)" //The 'jump' into frame.
        },
        200,
        "ease"
      );
      $("#checkbox").transit({ //Make the checkbox invert colors and get a border.

          background: "#333", //Slightly darker color so it doesn't look transparent.
          boxShadow: "0 0 0 3px #ccc , 0 0 20px 0 #222" //Create the border.
        },
        200,
        "ease-out"
      );
      if ($("#checkfunc").is(":checked") && $("#checkfunc2").is(":checked")) {
        $("#slideup").transit({
          y: 0,
          background: "#ccc"
        }, 400, "cubic-bezier(.2,1,.89,1)")
      }
    } else {
      $("#checkmark").transit({ //Make the checkmark disappear + jump out of frame.

          opacity: 0, //Make it actually disappear.
          boxShadow: "0 0 #555 , 0 0 #555 , 0 0 #555", //disband the checkmark shape.
          transform: "translatey(13px) , rotate(-45deg)" //'Jump' out of frame.
        },
        200,
        "cubic-bezier(.2,1.38,.89,1.36)"
      );
      $("#checkbox").transit({ //Revert checkbox to state before check.
          background: "#ccc",
          boxShadow: "0 0 0 0 #555 , 0 0 0 0 black" //Disband border.
        },
        200,
        "ease-out"
      );
      if (!$("#checkfunc").is(":checked") || !$("#checkfunc2").is(":checked")) {
        $("#slideup").transit({
          y: "100%",
          background: "#555"
        }, 400, "cubic-bezier(.2,1,.89,1)")
      }
    }
  });

  //Transitions on check of the checkbox for the box on the **right**.
  $("#checkfunc2").click(function() { //Documentation is up.^^
    if ($(this).is(":checked")) {
      $("#checkmark2").transit({
          opacity: 1,
          boxShadow: "-3px 3px #ccc , -3px 0 #ccc , 0 3px #ccc",
          transform: "translatey(-3px) , rotate(-45deg)"
        },
        200,
        "ease"
      );
      $("#checkbox2").transit({
          background: "#333",
          boxShadow: "0 0 0 3px #ccc , 0 0 20px 0 #222"
        },
        200,
        "ease-out"
      );

      if ($("#checkfunc").is(":checked") && $("#checkfunc2").is(":checked")) {
        $("#slideup").transit({
          y: 0,
          background: "#ccc"
        }, 400, "cubic-bezier(.2,1,.89,1)")
      }
    } else {
      $("#checkmark2").transit({
          opacity: 0,
          boxShadow: "0 0 #555 , 0 0 #555 , 0 0 #555",
          transform: "translatey(13px) , rotate(-45deg)"
        },
        200,
        "cubic-bezier(.2,1.38,.89,1.36)"
      );
      $("#checkbox2").transit({
          background: "#ccc",
          boxShadow: "0 0 0 0 #555 , 0 0 0 0 black"
        },
        200,
        "ease-out"
      );
      if (!$("#checkfunc").is(":checked") || !$("#checkfunc2").is(":checked")) {
        $("#slideup").transit({
          y: "100%",
          background: "#555"
        }, 400, "cubic-bezier(.2,1,.89,1)")
      }
    }
  });





  //Change the size of the body to the size of the window on resize of the window.
  $(window).resize(function() {
    $("body").css({
      height: $(window).height(),
      width: $(window).width()
    });
  });
});
