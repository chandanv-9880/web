const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function collectClientInformation() {
    rl.question('Enter your name: ', function (name) {
        rl.question('Enter your phone number: ', function (phone) {
            rl.question('Enter your email: ', function (email) {
                console.log('Information collected:');
                console.log('Name: ' + name);
                console.log('Phone Number: ' + phone);
                console.log('Email: ' + email);
                rl.close();
            });
        });
    });
}

collectClientInformation();
