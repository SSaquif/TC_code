/////////////////////--Problem::Unhandled Async Code--///////////////////
console.log("Before");

//Wrong solution
const getUserWrongSolution = getUserNoCallback(1); //This will return undefined
console.log("user: " + getUserWrongSolution);

function getUserNoCallback(id) {
	setTimeout(() => {
		console.log("Getting user from db using id");
		return { id: id, userName: "NameFromDataBase" };
	}, 2000);
}

console.log("After");
//////////////////----------------------/////////////////////
