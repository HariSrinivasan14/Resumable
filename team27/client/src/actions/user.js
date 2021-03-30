
const API_HOST = 'http://localhost:5000';

export const newAccount = (account) => {
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
            if (res.status === 200) {
                return;
            }
        })
        .catch(error => {
            console.log(error);
        });
};