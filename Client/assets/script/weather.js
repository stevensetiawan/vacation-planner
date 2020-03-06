let getWeather = () => {
    $.ajax({
        url: "http://localhost:3000/weather/5daysforecast",
        type: "GET",
        data: {},
        //headers: { token: localStorage.getItem("token") },
        success: function (data) {
            //$login.hide()
            //$list.show()
            $tableWeather.empty()
            data.forEach(element => {
                let day = convertDay(element.dt)
                let time = element.dt_txt
                let temperature = element.main.temp - 273
                let humidity = element.main.humidity
                let weather = element.weather.main
                $('#table-weather> tbody:last-child').append(
                    `<tr>
                        <th scope="row">${day}</th>
                        <td>${time}</td>
                        <td>${temperature}</td>
                        <td>${humidity}</td>
                        <td>${weather}</td>
                    </tr>`
                )
            });
        }
    })
}