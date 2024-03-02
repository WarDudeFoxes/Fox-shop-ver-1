const userInform = JSON.parse(localStorage.getItem('userInfo')) || [{
  userNameEmail: "fox@gmail.com",
  userPassword: "wardude"
}];


document.querySelector('.login-button').addEventListener('click', () => {

  const userPassword = document.querySelector('.login-password');
  const userNameEmail = document.querySelector('.login-email');
  const password = userPassword.value;
  const emailUsername = userNameEmail.value;

  userInform.forEach(data => {
    if (emailUsername === data.userNameEmail && password === data.userPassword) {
      userNameEmail.value = "";
      userPassword.value = "";
      document.querySelector('.login-full-content').classList.remove('display');
      document.querySelector('.join-content').classList.add('display');
      document.querySelectorAll('.join').forEach(element => {
        element.className = 'display';
      });
      document.querySelectorAll('.user-name').forEach(name => {
        name.innerText = "user"
      });
    };
  });
});


const userPassword = document.querySelector('.signup-password');
const userNameEmail = document.querySelector('.signup-email');

document.querySelector('.register').addEventListener('click', () => {
  const password = userPassword.value;
  const emailUsername = (userNameEmail.value).toLowerCase()

  let existingEmail = "";
  userInform.forEach(data => {
    if (emailUsername === data.userNameEmail) {
      userNameEmail.value = existingEmail
      userNameEmail.className = "input-color1";
      console.log('sxgsxs')
    };
  });
  
  if(!password.includes(" ") && emailUsername.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {

    userInform.push({
      userNameEmail: (userNameEmail.value).toLowerCase(),
      userPassword: userPassword.value
    });

    saveUserInfo();
    userNameEmail.value = "";
    userPassword.value = "";
    // document.querySelector('.login-full-content').classList.remove('display');
    document.querySelector('.join-content').classList.add('display');
    document.querySelectorAll('.join').forEach(element => {
      element.classList.add('display')
    });
    document.querySelectorAll('.user-name').forEach(name => {
      name.innerText = "user"
    });
  } else {
    if (password.includes(" ")) {
      userPassword.className = "input-color1";
    } else if (!emailUsername.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
      userNameEmail.className = "input-color1";
    };
  };

  console.log(userInform);
});

document.querySelector('.signup-password').addEventListener('keyup', () => {
  const password = userPassword.value;

  if (password.includes(" ")) {
    userPassword.className = "input-color1";
    console.log('dbhwedjhw')
  } else if (password.length < 6 && password.length > 0) {
    userPassword.className = "input-color1";
  } else if (password.length > 5) {
    userPassword.className = "input-color2";
  } else if (password === "") {
    userPassword.className = "signup-email";
  };
});

document.querySelector('.signup-email').addEventListener('keyup', () => {
  const emailUsername = userNameEmail.value;

  console.log(emailUsername)
  if (emailUsername.includes(" ")) {
    userNameEmail.className = "input-color1";
    console.log('yjdgcbh')
  } else if (emailUsername.length < 5  && emailUsername.length > 0) {
    userNameEmail.className = "input-color1";
  } else if (emailUsername.length > 4) {
    userNameEmail.className = "input-color2";
  } else if (emailUsername === "") {
    userNameEmail.className = "signup-email";
  };

  userInform.forEach(data => {
    if (emailUsername === data.userNameEmail) {
      userNameEmail.className = "input-color1";
    };
  });
});


function saveUserInfo() {
  localStorage.setItem('userInfo', JSON.stringify(userInform))
}


// (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)