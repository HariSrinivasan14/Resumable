const API_HOST = 'http://localhost:5000';

export function fetchPostsData() {
    let postsPromise = fetchPosts();
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

function fetchPosts() {
//   let posts = []
  const request = `${API_HOST}/getPost`
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

export const newPosti = (data) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/addPost`, {
        method: "POST",
        body: data,
    });
  //   headers: {
  //     Accept: "application/json, text/plain, */*",
  //     "Content-Type": "application/json"
  // }

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



export const fetchPostsByUsername = (posts) => {
//   let posts = []
const request = `${API_HOST}/getPostByUsername`
console.log("Fetch Posts...");
fetch(request)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            alert("Could not get posts");
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        // post = json[0];
        console.log(json)
        posts = json;
        console.log(json)
        return json;
    })
    .catch(error => {
        console.log(error);
    });
  }
