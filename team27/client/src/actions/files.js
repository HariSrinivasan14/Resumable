const API_HOST = 'http://localhost:5000';

export const getFileById = (id) => {
    const reqUrl = `${API_HOST}/files/${id}`;
    fetch(reqUrl)
        .then(res => {
            if (res.status === 200) {
                return;
            }
        })
        .catch(error => {
            console.log(error);
        });
};