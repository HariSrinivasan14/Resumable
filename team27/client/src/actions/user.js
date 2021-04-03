
const API_HOST = 'http://localhost:5000';

export const newAccount = (account, app) => {
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
        .then(reponse => {
			if(reponse.status === 200){
				console.log("got here false");
				app.setState({
					toggleUsername: 2
				});
				return;
			}else{
				console.log("got here true");
				app.setState({
					toggleUsername: 3
				});
				return;
			}
        })
        .catch(error => {
            console.log(error);
        });
};

export const loginAccount = (account, app) => {
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
			console.log(json);
			if (json.currentUser !== undefined){
				if(json.currentUser === 'admin'){
					app.setState({
						toggleUsername: 4
					});
				}else{
					app.setState({
						toggleUsername: 3
					});
				}
				return;
			}else{
				app.setState({
					toggleUsername: 5
				});
			}
        })
        .catch(error => {
            console.log(error);
        });
};

export const checkUserSession = (website) => {
    const url = `${API_HOST}/users/checkSession`;

    fetch(url)
		.then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
           
            
            if (json && json.currentUser) {
                website.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
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
};