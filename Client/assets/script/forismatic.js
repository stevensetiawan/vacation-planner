let forismatic = () => {
    $.ajax({
        url: "http://localhost:3000/forismatic/quote",
        type: "GET",
        //headers: { token: localStorage.getItem("token") },
        success: function(data) {
            $(`#quotes`).append(`<div> ${data.quoteText} - ${data.quoteAuthor} </div>`)
        }
        })
    }
