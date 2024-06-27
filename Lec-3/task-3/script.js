// Using Class Syntax:

    class User1 {
        constructor(name, email) {
            this.name = name;
            this.email = email;
            this.online = false;
        }
        
        login() {
            this.online = true;
            console.log(`${this.name} is now online.`);
        }
        
        logout() {
            this.online = false;
            console.log(`${this.name} is now offline.`);
        }
    }

    const User2 = new User1('Zohan', 'zohan@example.com');
    User2.login(); 
    // Output: Zohan is now online.



// Using Constructor Function:
    function User3(name, email) {
        this.name = name;
        this.email = email;
        this.online = false;
    }

    User3.prototype.login = function() {
        this.online = true;
        console.log(`${this.name} is now online.`);
    };

    User3.prototype.logout = function() {
        this.online = false;
        console.log(`${this.name} is now offline.`);
    };

    const User4 = new User3('Zohan', 'zohan@example.com');
    User4.login(); 
    // Output: Zohan is now online.