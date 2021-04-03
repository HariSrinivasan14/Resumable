
import ENV from './../config.js'
const API_HOST = ENV.api_host

export const newAccount = (account, signUp, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/addUser`, {
        method: "post",
        body: JSON.stringify(account),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(res => {
			if(res.status === 200){
				return res.json();
			}
        })
		.then(json => {
			if (json.userFound === false){
                app.setState({
                    currentUser: json.Username
                });
				return;
			}else{
                signUp.setState({
                    toggleUsername: 2 // Username taken
                });
 			    return;
			}
        })
        .catch(error => {
            console.log(error);
        });
    
};

export const loginAccount = (account, loginPage, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/loginUser`, {
        method: "post",
        body: JSON.stringify(account),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(res => {
			if(res.status === 200){
				return res.json();
			}
        })
		.then(json => {
			console.log("login Account", json);
			if (json.currentUser !== undefined){
                app.setState({
                    currentUser: json.currentUser
                });
				return;
			}else{
				loginPage.setState({
					toggleUsername: 5, // if the password or username is incorrect
                    togglePassword: 5
				});
			}
        })
        .catch(error => {
            console.log(error);
        });
};

export const checkUserSession = (app) => {
    const url = `${API_HOST}/users/checkSession`;
    console.log("logging current user in react", ENV.use_frontend_test_user);

    if(!ENV.use_frontend_test_user){
        fetch(url)
		.then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }else{
        app.setState({ currentUser: ENV.user });
    }
    
};

export const updateUserInfo = (website) => {

    const request = new Request(`${API_HOST}/updateInfo`, {
        method: "put",
        body: JSON.stringify(website),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
		.then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .catch(error => {
            console.log("error PUT");
            console.log(error);
        });
};

export const getUser = () => {

    const request = new Request(`${API_HOST}/getUser`, {
        method: "get"
       
    });
    fetch(request)
		.then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .catch(error => {
            console.log("error PUT");
            console.log(error);
        });
    }
export const logoutUser = (app) => {
    const url = `${API_HOST}/users/logout`;
    console.log("logging out user", app)
    fetch(url)
        .then(res => {
            app.setState({
                currentUser: null,
            });
        })
        .catch(error => {
            console.log(error);
    });
};