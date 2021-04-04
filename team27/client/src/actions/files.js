const API_HOST = 'http://localhost:5000';

export const getFileById = (id) => {
    const request = new Request(`${API_HOST}/files/${id}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/pdf' }
    });
    fetch(request)
        .then(res => {
            console.log(res);
            if (res.status === 200) {
               return;
            }
        })
        .catch(error => {
            console.log(error);
        });
};