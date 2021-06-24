$("#submitBtn").on("click", function () {
    let write_input = $("#write_input").val();
    console.log(write_input);
    showCard();
})
function showCard() {
    let write_input = $("#write_input").val();
    $.ajax({
        async: "true",
        crossDomain: "true",
        url: "https://imdb8.p.rapidapi.com/auto-complete?q=" + write_input,
        type: "get",
        headers: {
            "x-rapidapi-key": "a532d72e25msh4acf43231d503a2p198623jsnd1f2dd2191f7",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        },
        success: function (response) {
            console.log(response);
            let cards_block = $("#cards_block");
            cards_block.empty();
            
            for (c = 0; c < response['d'].length; c++) {
                
                cards_block.append(`
                <div class = "card_block">
                <p class = "song_name">${response['d'][c]['l']}</p>
                <img class = "song_img" src = '${response['d'][c]['i']['imageUrl']}'>
                </div>
          `)

            }
        }, error: function () {
            alert("error");
        }
    });
}
let submitBtn =  document.querySelector("#submitBtn");
$("#submitBtn").mouseover(function(){
    submitBtn.style.backgroundColor = "#94ff90";
})
$("#submitBtn").mouseout(function(){
    submitBtn.style.backgroundColor = "#3D3E47";
})



