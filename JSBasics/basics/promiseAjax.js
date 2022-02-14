console.log('start')

// funtion takes time!
function loginUser(email, pwd) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Now we have the data')
            resolve({userEmail: email, usePwd: pwd})
            reject('got nothing')
        }, 1000)
    })
}

function getUserVedios(email) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('Now we have the vedios')
            resolve(['vedio1', 'vedio2', 'vedio3'])
            reject('got nothing')
        }, 2000)
    })
}

// loginUser('ed', '123456')
// .then(user => getUserVedios(user.userEmail))
// .then(vedios => console.log(vedios))

async function displayVedios() {
    const user = await loginUser('xjy', 12345)
    const videos = await getUserVedios(user.userEmail)
    console.log(videos)
}

displayVedios()

