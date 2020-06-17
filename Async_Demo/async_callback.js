//////////////////--Callback Solution--/////////////////////
console.log('Before');

//Using the const getUserCallbackSolution is useless its values is undefined, for learning purpose
const getUserCallbackSolution = getUser(1, (user) => {
	console.log('userCallbackSolution: ', user.userName);
	return user.userName; //This return is pretty useless
});

console.log(
	'User:(callback this should still be undefined)' + getUserCallbackSolution
); //cause this happens before athe return value is received by the const

console.log('After');

function getUser(id, callback) {
	setTimeout(() => {
		console.log('Getting user from db using id:CallbackSoluition');
		callback({ id: id, userName: 'NameGottenFromDataBase' }); //NOTE: NO return statement
	}, 2000);
}

function getPosts(username, callback) {
	setTimeout(() => {
		console.log('Getting user posts for ', username);
		callback({ username: username, posts: ['Post1', 'Post2'] });
	}, 2000);
}
////////////////////////-------------///////////////////////////
