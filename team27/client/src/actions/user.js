
const API_HOST = 'http://localhost:5000';

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
			console.log(json);
			if (json.currentUser !== undefined){
                app.setState({
                    currentUser: json.currentUser
                });
				// if(json.currentUser === 'admin'){
				// 	loginPage.setState({
				// 		toggleUsername: 4 // to redirct to admin page
				// 	});
				// }else{
				// 	loginPage.setState({
				// 		toggleUsername: 3 // to redirct to Explore page
				// 	});
				// }
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
    console.log("logging current user in react", app.state.currentUser);
    fetch(url)
		.then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
           
            
            if (json && json.currentUser) {
                console.log("got here!!!!");
                app.setState({ currentUser: json.currentUser });
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

// export const getUser = () => {

//     const request = new Request(`${API_HOST}/getUser`, {
//         method: "get"
       
//     });
//     fetch(request)
// 		.then(res => {
//             if (res.status === 200) {
//                 return res.json();
//             }
//         })
//         .catch(error => {
//             console.log("error PUT");
//             console.log(error);
//         });
//     }
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

export function fetchUsersData() {
    let postsPromise = fetchUsers();
    return {
      posts: wrapPromise(postsPromise)
    };
  }

function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
      r => {
        status = "success";
        result = r;
      },
      e => {
        status = "error";
        result = e;
      }
    );
    return {
      read() {
        if (status === "pending") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          return result;
        }
      }
    };
  }

function fetchUsers() {
//   let posts = []
  const request = `${API_HOST}/getUser`
  console.log("Fetch Posts...");
  return new Promise(resolve => {
      resolve(fetch(request)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          } else {
              alert("Could not get students");
          }
      })
      .then(json => {
          // the resolved promise with the JSON body
          // post = json[0];
          console.log(json)
          return json
      })
      .catch(error => {
          console.log(error);
      }));
  });
}