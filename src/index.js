let disp = document.getElementById("blank");
async function getRandomUser(){
    const response = await fetch('https://randomuser.me/api/'); 
    const data = await response.json();
    const user = data.results[0];
    display(user);

}
function display(user){
    let name = document.getElementById("name")
    name.innerText = `${user.name.first + " " + user.name.last}`

    let img = document.getElementById("img");
    img.setAttribute('src', `${user.picture.large}
