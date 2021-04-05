const API_HOST = 'http://localhost:5000';

export const getFileById = (id) => {
    const request = new Request(`${API_HOST}/files/${id}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    });
    // .then((data) => console.log("files", data))
    fetch(request)
        .then(res => {
            return res.url;
        })
        .catch(error => {
            console.log(error);
        });
};