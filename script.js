const menu = document.getElementById("menu");

const submitbtn = document.getElementById("sumbitbtn");
const loginpg = document.getElementById("login");

const signupbtn = document.getElementById("navbar-signup");
const signupbtn_sidebar = document.getElementById("sidebar-signup");

const close = document.getElementById("close");

const body = document.body;

function disablescroll(){
    body.style.overflow = 'hidden';
 }
 function enablescroll(){
    body.style.overflow = 'auto';
 }

menu.onclick = function(){
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = 'inline-block';
}

close.onclick = function(){
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = 'none';
}

signupbtn_sidebar.onclick =function(){
    loginpg.style.display = 'flex';
    sidebar.style.display = 'none';  
    disablescroll();
}
    signupbtn.onclick = function(){
    loginpg.style.display = 'flex';
    disablescroll();
}

submitbtn.onclick =  function(event){
    const lname = document.getElementById("lname").value;
    const fname = document.getElementById("fname").value;
    const gmail = document.getElementById("gmail").value;
    const password = document.getElementById("password").value;
    console.log(`first name ${fname}`);
    console.log(`last name ${lname}`);
    console.log(`gmail name ${gmail}`);
    loginpg.style.display = 'none';
    enablescroll();
};

