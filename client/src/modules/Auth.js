class Auth {

    // Let's take advantage of that browser storage within this helper 
    // Basically save user token to the browser's session storage

    static authenticateToken(token) {
        sessionStorage.setItem('token', token);
    }

    static isUserAuthenticated() {
        return sessionStorage.getItem('token') !== null;
    }

    static deauthenticateUser() {
        sessionStorage.removeItem('token');
    }

    static getToken() {
        return sessionStorage.getItem('token');
    }
}

export default Auth;