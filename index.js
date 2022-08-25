
ValidateEmail()
function ValidateEmail ()  {
    const email = prompt(`Enter your email`);
    let usersEmail = 'admin@test.io';
    if (email !== usersEmail) {
        alert('You have entered an invalid email address!');
        return;
    }
    const password = prompt(`Enter your password`)
    let usersPassword = 'admin1234';
    if (password !== usersPassword) {
        alert('You have entered an invalid password!');
    }
    else if (email === usersEmail &&  password === usersPassword) {
        alert('You have successfully entered your login and password!');
    }
}