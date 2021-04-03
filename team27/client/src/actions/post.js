const API_HOST = 'http://localhost:5000';

export function fetchPostsData() {
    let postsPromise = fetchPosts();
    console.log(postsPromise)
    return {
      posts: wrapPromise(postsPromise)
    };
  }

  export function fetchCommentsData(id) {
    
    let commentPromise = fetchComments(id);
    console.log(commentPromise)
    return {
      comments: wrapPromise(commentPromise)
    };
  }
function wrapPromise(promise) {
    let status = "pending";
    let result;
    
    let suspender = promise.then(
      r => {
        console.log(r)
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
              alert("Could not get posts");
          }
      })
      .then(json => {
          // the resolved promise with the JSON body
          // post = json[0];
          
          return json
      })
      .catch(error => {
          console.log(error);
      }));
  });
}


export const newPosti = (post) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/addPost`, {
        method: "post",
        body: JSON.stringify(post),
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

export const newComment = (postid, comment) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/addPost/${postid}`, {
        method: "post",
        body: JSON.stringify(comment),
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

function fetchComments(id) {
    //   let posts = []
      const request = `${API_HOST}/getPost/${id}`
      console.log("Fetch Comments...");
      return new Promise(resolve => {
          resolve(fetch(request)
          .then(res => {
              if (res.status === 200) {
                  console.log(res)
                  return res.json();
              } else {
                  alert("Could not get comments");
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
    