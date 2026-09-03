async function getUser() {
    try{
        let usersRes = await fetch("https://jsonplaceholder.typicode.com/users1");
        if(!usersRes.ok) throw new Error("Cant's find users");
        let data = await usersRes.json();
        console.log(data);

    }catch(err){
        // console.log(err);
        // console.log(err.message);
        console.log(err.stack);
        
    }
}
getUser();