// JQUERY

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true); //disables button
    $("#target4").html("<em>#target4</em>"); //swap text with same but emphasised.
    $("#target4").remove();
    $("#target2").appendTo("#right-well"); // to move element to another element by using ID tags.
    $("#target5").clone().appendTo("#left-well"); // clone then move.
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
    $("body").addClass("animated hinge");

    
  });
</script>

