console.log('start')

// funtion takes time!
function loginUser(email, pwd, onSuccess, onFailure) {
    setTimeout(()=>{
        console.log('now we have the data')
        onSuccess({
            userEmail: email,
            userPwd: pwd
        }) 
    }, 1500)
}

function geUserVedios(email, onSuccess, onFailure) {
    setTimeout(()=>{
        console.log('now we have vedios');
        onSuccess(['vedio1', 'vedio2', 'vedio3'])
    }, 1000)
}

const user = loginUser('test@user.com', 123456, (user)=>{
    console.log(user)
    geUserVedios(user.userEmail, (vedios)=>{
        console.log(vedios)
    })
})


console.log('finish')
