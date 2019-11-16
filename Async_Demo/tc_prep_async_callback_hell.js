////////////////////////---CALLBACK HELL----///////////////////////////
console.log('Before (Independent block of code that dont require Async op)');

//See the nesting of callbacks
getUser(1,(user)=>{
    console.log('userCallbackSolution: '+ user.userName);
    getUserRepos(user.userName,(repos)=>{
        console.log(`userRepos:${repos}`);
    })
    return user.userName; //This return is pretty useless
});

function getUser(id,callback){
    setTimeout(()=>{
        console.log('Getting user from db using id:CallbackSoluition');        
        callback({id:id, userName:'NameGottenFromDataBase'}); //NOTE: NO return statement
    },2000);
}

function getUserRepos(username, callback){
    setTimeout(()=>{
        console.log(`Getting github repos of${username}`);
        const githubRepos = ['Repo1','Repo2'];
        callback(githubRepos); //NOTE: NO return statement
    },2000);
}

console.log('After (Independent block of code that dont require Async op)');
console.log('Ending NOTE:ISSUE with callback solution is you can have to many nested callbacks. CALLBACK HELL');
////////////////////////-------------///////////////////////////