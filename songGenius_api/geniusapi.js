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
        url: "https://genius.p.rapidapi.com/search?q=" + write_input,
        type: "get",
        headers: {
            "x-rapidapi-key": "a532d72e25msh4acf43231d503a2p198623jsnd1f2dd2191f7",
            "x-rapidapi-host": "genius.p.rapidapi.com"
        },
        success: function (response) {
            console.log(response);
            let cards_block = $("#cards_block");
            let container =  document.querySelector(".container");
            cards_block.empty();
            container.style.border = "3px solid #FD33AB";
            for (i = 0; i < response['response']['hits'].length; i++) {
                
                cards_block.append(`
                <div class = "card_block">
                <p class = "song_name">${response['response']['hits'][i]['result']['title']}</p>
               
                <p class = "singer_name">${write_input}</p>
                <a class = "song_url" href = '${response['response']['hits'][i]['result']['url']}'>more</a><br>
                <img class = "song_img" src = '${response['response']['hits'][i]['result']['song_art_image_url']}'>
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
    submitBtn.style.backgroundColor = "#FD0036";
})
$("#submitBtn").mouseout(function(){
    submitBtn.style.backgroundColor = "#3D3E47";
})



