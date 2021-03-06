$(document).ready(function () {
    if (localStorage.getItem("token")) {
        getTodo()
        $list.show();
    } else {
        $login.show()
    }

    $buttonRegister.click(function (event) {
        event.preventDefault()
        $registerForm[0].reset()
        $login.hide()
        $register.show()
    })

    $buttonLogin.click(function (event) {
        event.preventDefault()
        $loginForm[0].reset()
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
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
    })

    $buttonList.click(function (event){
        event.preventDefault()
        $add.hide()
        $edit.hide()
        $(`#weather`).hide()
        $list.show()
    })

    // $buttonEdit.click(function(event){
    //     event.preventDefault()
    //     $list.hide()
    //     getEditDataTodo(id)
    // })

    $addForm.submit(function (event) {
        event.preventDefault()
        translate()
        // addTodo()
        console.log("ok")
        $addForm[0].reset()
    })
    $doneChecker.click(function (event){
        event.preventDefault()
        updateStatusTodo()
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
  
    $buttonWeather.click(function (event){
        event.preventDefault()
        getWeather()
        $weather.show()
        $list.hide()
        $login.hide()
    })

    
});

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        type:"POST",
        url:"http://localhost:3000/users/googlesignin",
        data:{
            id_token
        },
        success:function(response ){
            console.log(response)
            localStorage.setItem("token",response.token)
            getTodo()
        }
    })
  }
