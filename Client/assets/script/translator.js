let translate = () => {
    console.log($addDescription.val())
    var title = $addTitle.val()
    var due_date = $addDate.val()
    $.ajax({
        url: "http://localhost:3000/translator/mymemory",
        type: "POST",
        data: {
            description: $addDescription.val()
        },
        success: function (data) {
            console.log(data)
            $.ajax({
                url: "http://localhost:3000/todos",
                type: "POST",
                headers: { token: localStorage.getItem("token") },
                data: {
                    title: title,
                    description: data.responseData.translatedText,
                    due_date: due_date
                },
                success: function (data) {
                    console.log("okeeee")
                    $add.hide()
                    getTodo()
                }
            })
        },
        fail: (err) => {
            console.log(err)
        }
    })
}