////////////////////////---Promises: Solving CALLBACK HELL----///////////////////////////
console.log('Before (Independent block of code that dont require Async op)');

//Old callback way for comparison
// getUser(1,(user)=>{
//     console.log('userCallbackSolution: '+ user.userName);
//     getUserRepos(user.userName,(repos)=>{
//         console.log(`userRepos:${repos}`);
//     })
//     return user.userName; //This return is pretty useless
// });

//New promise way, consuming promises
const promise1 = getUser(1)
    .then(user=>{
        console.log(`UserId: ${user.id}, UserName: ${user.userName}`)
        return getUserRepos(user.userName);
    })
    .then(repos=>{
        console.log(`UserRepos: ${repos}`)
        return repos;
    })

console.log(promise1); //This will return the state of promise::EX: Promise { <pending> }

//This function creates a promise
function getUser(id){
    return new Promise((resolve,reject)=>{        
        setTimeout(()=>{
            console.log('Getting user from db');        
            resolve({id:id, userName:'NameGottenFromDataBase'}); //NOTE: NO return statement
        },2000);     
    });
}

//This function creates a promise
function getUserRepos(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Getting github repos of${username}`);
            const githubRepos = ['Repo1','Repo2'];
            resolve(githubRepos); //NOTE: callback function changed with resolve, this is returned
        },2000);
    });
}

console.log('After (Independent block of code that dont require Async op)');
////////////////////////-------------///////////////////////////