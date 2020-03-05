let getTodo = () => {
    $.ajax({
        url: "http://localhost:3000/todos",
        type: "GET",
        data: {},
        headers: { token: localStorage.getItem("token") },
        success: function (data) {
            $login.hide()
            $list.show()
            $tableTodo.empty()
            data.forEach(element => {
                $('#table-todo > tbody:last-child').append(
                    `<tr>
                        <th scope="row">${element.id}</th>
                        <td>${element.title}</td>
                        <td>${element.description}</td>
                        <td id="status-body">${element.status}</td>
                        <td>${element.due_date}</td>
                        <td><div class="form-check">
                            <input type="checkbox" class="form-check-input" id="done-checker" checked?updateStatusTodo(${element.id}): >
                            <label class="form-check-label">Check if done</label>
                            </div>
                        </td>                       
                        <td> <a class="btn btn-primary" onclick="getEditDataTodo(${element.id})" role="button" >Edit</a> <a class="btn btn-primary" onclick="deleteTodo(${element.id})" role="button">Delete</a></td>
                    </tr>`
                )
            });
        }
    })
}