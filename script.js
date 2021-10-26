$(document).ready(function() {

    var $butt = $("button")
    $butt.on("click", ()=> {
        let gen = Math.ceil(Math.random()*87)
        $.get(`https://akabab.github.io/starwars-api/api/id/${gen}.json`, function(data) {
            let $content = $("#content")
            $content.text(data.name)
            $(".imge").attr("src", data.image)
        })
    })

})