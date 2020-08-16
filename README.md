This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start / npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Solving the challenge

libraries to use: 
redux react-redux since redux is required for the challenge
axios for the request (maybe it's an overkill but so I can handle the reponse and errors)
datefns for formatting the date

Project structure (draft)
Layout (hoc to wrap the components in the app component)
    Sidebar (container)
        SidebarList
            Post
    Details (container)
        PostDetail


note: Sent email to Daiana to ask about "Saving pictures in the picture gallery" since it looks like a mobile native feature

- getting the list of items using axios
- setting the list to redux
- handling item click to mark as read
- adding load more button to get more screens
- disabling button when there are no more results or is loading (to avoid several requests)
- added details view to show pots's details
- created simple thumb component to reuse in list and details
- done for the day :)

todos:
- Add clear item button
- Add clear all button
- Add animation
