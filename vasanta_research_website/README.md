# How to get started
- Git clone this repo
- Open terminal and cd into sparklab.github.io then into vasanta_research_website
- Run _npm install_ (run with "sudo" in the front if permissions are denied)
- Run _npm run dev_ (run with "sudo" in the front if permissions are denied) [this command opens the website on vite]
- When you make a change, ctrl+s and the webpage will update

# Understanding how a page works and how to manipulate one (basic web development knowledge)
- Go to "Home.jsx"
- Inside the return there lies HTML code.
- Every page/jsx file requires a parent element that contains all the elements inside the page. "< div >< /div >" (ignore spaces) or "<></>" would work (look up differences between the two if curious).
- From then on you can start coding in normal HTML and CSS. For the CSS, it is best to create a separate .css file for the site. For example, for "Home.jsx" there is "Home.css". If you are new to web development, check out this basic tutorial and feel free to make use of ChatGPT! (https://www.youtube.com/watch?v=kLO4X_3VYdg&ab_channel=freeCodeCamp.org)

# Making personal profile on website
- Go into the "team_members" folder and create a new file titled "{FIRST_NAME}_{LAST_NAME}.jsx"
- Copy code from "sample_member.jsx"
- (OPTIONAL) Import an image of you (png or jpeg) into 'team_photos' inside the assets folder
- (OPTIONAL) Import your resume (PDF format) into 'resumes' in the assets folder
- Change your name and role
- Fill in your email
- (OPTIONAL) Fill in your LinkedIn URL, GitHub Url
- For your description, it is best to pull up a document app (i.e. Google Docs) and write out a short description about yourself! Whenever you want to create a new line, simply just add '\n' between the parts you want to split (no space required).
- Go into 'main.jsx' and under the team pages comment, import your newly created react file. Finally, scroll down to the next team pages comment inside the render and create a new route to your page (follow the other routes or template if stuck).

# How to edit team page
- Add a new object to the "teamMembers" and follow the attributes of the previous ones (name, role, username, img)
- (OPTIONAL) With your profile picture in "team_members" import your picture and set img to it
- If you want to remove a member, simply take out the object.

# Editing base url (look for creating a global var file later)
- The base url variable is located in 'main.jsx', 'Navbar.jsx', 'Footer.jsx', 'Team.jsx'

# Next Steps:
- Fill out each portion of the website (Research, Contact, Papers, and Home page)
- Each team member creates their webpage (make a template so it is consistent)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
