## Libraries that we used:
- devexpress
- material-ui
- semantic-ui
- react-pdf
- bootstrap
- pdfjs-dist
- react-bootstrap
- react-dropzone
- react-router-dom
- react-toastify


## Login Credentials

### For Admin:
**Username:** admin
**Password:** admin

### For User:
**Username:** user
**Password:** user

## Instructions

First type npm install in the console to get all the libraries installed.

To start the web application type npm start in the console. The website should starts on a landing page

### Step 1:
### User View:
**Sign Up**
 	If the user does not have an account they can sign up by clicking the sign up button. This will redirect the user to sign up page where they have to fill out the required text box and click the sign up button. Once a user clicks on the sign up button a new account will be created based on the information provided (does not create a new user right now but will create a new user when the website is connected to the our database) and will redirect the user to the Explore page.

**Login**

If a user has an account they can click the login button that is located at top right of the page. This will redirect the user to the login page where they can login with their correct credentials. Since we don't have a database right now, please use credentials that are provided (located at the top of this page) to login. Once the login button is clicked with the correct credentials it will redirect the user to the Explore page.


### Admin View:
**Login**

An admin will be able to login by clicking the login button that is located at top right of the page. This will redirect them to the login page where they can login with correct admin credentials (please use the admin credentials, located at the top of this page,  that are provided to login in as an admin). Once an admin login with correct credentials, the website will redirect them to the admin page.


### Step 2:
**Admin Page**
Our admin page as it stands just serves the purpose of showing some useful data such as the total number of feedback received today, total number of posts uploaded today and some other info on the number of active users. There is also a graph showing the number of posts on a particular day of the month. The admin can also press on the “Explore” button which would take them to the explore page. From there, the admin has the same permissions as the user for now. In our next phase, we will add new functionalities for the admins such as deleting posts and comments, banning or unbanning users and more.

### User/Admin View:

### Step 3:
**Explore (For user)**
A User can create a new post and upload your resume as follows (the upload pdf resume works but for simplicity of our mock data we going to use default resume): 

1. Click create post button
2. The title of the post should be  "my best resume"
3. The subtitle of the post  "best resume ever"
4. The description of the post should be "I made this resume for software engineering in google."
5. Then press the post button to create a new post.

The user can now view new posts on the Explore page.

A user can also browse posts and checkout a specific post by clicking a post. If a user clicks a post it will redirect them to the Resume View, where they can view the resume and any comments left by other users. Users can add comments .

A user can easily return to the Explore page by clicking the home button that is located in the Navigation bar (which is located at the top of the page).

### Step 4:
**Resume View**
	If a user clicks on a post it will redirect them to the Resume View page.
	In our resume view page, the user sees the full resume, a description of what the owner of the resume is looking for and the comment section where the user can view other peoples comments on the post and add their own comments if they wish to do so. To leave a comment, the user can type whatever they want in the textbox provided under the comment section and then press “Add reply” which then would add their comment to the top of the comment section. The user can also click on the “Add Highlight” button which would take them to the Highlight Feedback View. For a description on the Highlight Feedback View page, look under step 5.

### Step 4:
**Profile**
The user can view their profile by clicking on the my profile button in the explore page. When the user is in the profile page, they can first see their personal information such as their name, birthday, contacts and ect. They can also view some of the posts that they have posted in the past. They can press on each post just like they would on the explore page and would take them to the comment section of the post. Another feature of this page is that a user is able to upload a general resume not for a particular post but for it to be shown when another user visits their profile page. They can do this by clicking the upload resume button which would then open a pop up on the screen. The pop up allows the user to upload a pdf file from their pc by drag and drop or by click to select. They also have the option to give the file a title, subtitle and a description if they want. After that a preview of their file will be shown to them to make sure that they can upload the right file and then they can just press on the post button for the resume to be posted onto their page. 
Step by Step instruction of how to go about interacting with this page.
To upload resume:
Press on the “Upload Resume” button under the information section.
Click on the part where it says “Drag ‘n’ drop your resume” in order to pick a file to upload
Under our team27 folder, proceed under images and pick the pdf file with the title sampleResume.pdf (we hard coded  this part because we don’t actually have a database yet to store the files).
Then click on post.


### Step 5:
### User/Admin View:
**Highlight Feedback View**
Upon entry to the highlight feedback page you will see two sections. The section on the left is a canvas which displays the file that can be highlighted. The section on the right will display the feedback items for the corresponding highlights.

Use the mouse cursor to select a line of text on the file to provide feedback for. After making the highlight selection a window with a textbox will pop up. Please enter your feedback corresponding to the highlight in the textbox and click submit. If no text is entered and the user clicks out of the popup, the feedback will be cancelled. After clicking submit, note that there is now a highlight over the text selected in the file. A corresponding feedback item is placed in the "Feedback Items'' section. The feedback item will contain a title (feedback entered in the textbox), and description (highlighted text). Users can make multiple highlights following the same steps.

Clicking a feedback item will focus the canvas on the corresponding highlight and make the colour of the highlight green. Moving the mouse out of the feedback item will unselect the selected highlight and change the colour back to yellow. Users can easily find specific feedback by clicking through the feedback items.
A user should click the post button located in the top right after they are done making highlights on the page.
