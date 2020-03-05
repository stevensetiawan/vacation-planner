$(document).ready(function () {
    if (localStorage.getItem("token")) {
        getTodo()
        $list.show();
    } else {
        $login.show()
    }

    $buttonRegister.click(function (event) {
        event.preventDefault()
        $login.hide()
        $register.show()
    })

    $buttonLogin.click(function (event) {
        event.preventDefault()
        $login.show()
        $register.hide()
    })

    $buttonAdd.click(function (event){
        event.preventDefault()
        $add.show()
        $list.hide()
    })

    $buttonLogout.click(function (event) {
        event.preventDefault()
        localStorage.removeItem("token")
        $loginFormReset.reset()
        $list.hide()
        $edit.hide()
        $add.hide()
        $login.show()
        
    })

    $buttonList.click(function (event){
        event.preventDefault()
        $add.hide()
        $edit.hide()
        $list.show()
    })

    // $buttonEdit.click(function(event){
    //     event.preventDefault()
    //     $list.hide()
    //     getEditDataTodo(id)
    // })

    $addForm.submit(function (event) {
        event.preventDefault()
        addTodo()
        $addForm[0].reset()
    })

    $editForm.submit(function (event){
        event.preventDefault()
        let id = $editSubmit.data('param')
        updateTodo(id)
        $edit.hide()
        $list.show()
    })

    $registerForm.submit(function (event) {
        event.preventDefault()
        registerUser()
    })

    $loginForm.submit(function (event) {
        event.preventDefault()
        loginUser()
    })
});