var n;

$(".dice").show();

$("#numberOfDices").change(function(){
    n = parseInt($(this).val());

    for (var i = 1; i < 7; i++){
        if (i <= n){
            $(".dice-"+i).show();
        } else {
            $(".dice-"+i).hide();
        }
    }
})


$("button").on("click", function(){

    for (var i = 1; i < n + 1; i++){
        var randomNum = generateRandomNumber();
        $(".dice-"+i).show()
        $(".dicePic-"+i).attr("src", "./images/dice"+randomNum+".png");
    }
})

function generateRandomNumber(){
    return Math.floor(Math.random() * 6) + 1;
}


