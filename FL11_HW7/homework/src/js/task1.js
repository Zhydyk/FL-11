// Your code goes here
const email = prompt('Enter your login:');

let minLengthEmail = 6;
let minLengthPassword = 5;
let nullString = '';


if (email === nullString || email === null) {
    alert('Canceled');

} else if (email.length < minLengthEmail) {
    alert('I don’t know any users having email length less than 6 symbols');

} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let pass = prompt('Enter your password');

    if (pass === nullString || pass === null) {
        alert('Canceled');

    }else if (email === 'user@gmail.com' && pass === 'UserPass' || email === 'admin@gmail.com' && pass === 'AdminPass'){
        if(confirm('Do you want to change your password?')){
            let oldPassword = prompt('Please write the old password');

            if(oldPassword === pass){
                let newPass = prompt('Enter your new password');
                
                if(newPass.length < minLengthPassword){
                    alert('It’s too short password. Sorry.');
                    let newPassConfirm = prompt('Enter your new password again please');

                    if (newPassConfirm === newPass) {
                        alert('You wrote the wrong password.');
                    }else{
                        alert('You have successfully changed your password.');
                    }
                }else{
                    alert('You have successfully changed your password.');
                }
            }else{
                alert('You wrote the wrong password.');
            }
                
        }else{
            alert('You have failed the change');
        }
   
    } else if (pass !== 'UserPass' || pass !== 'AdminPass') {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}