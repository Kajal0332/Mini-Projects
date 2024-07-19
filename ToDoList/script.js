$(document).ready(function () {
    $("#btn").click(function add() {
      // $("ul li").on("click", function (event) {
      //   if (confirm("delete?")) {
      //     event.target.parentElement.remove();
      //   }
      // });
      var input = $("#input").val().trim();
    if (input) {
      $("ul").append(
        "<li>" +
          input +
          '<i class="fa-solid fa-trash"></i>' +'<i class="fa-solid fa-check"></i>',
        "</li>"
      );
        $("#input").val("");
        $("ul").on("click", ".fa-trash", function () {
          $(this).parent("li").hide();
        });
        $("ul").on("click", ".fa-check", function () {
          $(this).parent("li").toggleClass("checked");
        });
      } else {
        alert("please enter something!");
      }
    });
  });
