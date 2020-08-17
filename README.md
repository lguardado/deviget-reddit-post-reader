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


- Add clear item button
- Add clear all button
- Format date
- Add animation
- deploy the app.


Notes: For the animation I installed react-transition-group which is recommended [here](https://es.reactjs.org/docs/animation.html), since you can't animate
an item if it's removed from the DOM.
I realized it's re-rendering all items when one of them is dismissed though even when I'm setting the key property, which
affects performance.
Also I had to remove strictMode to prevent a warning (`findDOMNode is deprecated in StrictMode`). 
The solution they provide is not working [using a ref](https://github.com/reactjs/react-transition-group/blob/1fd4a65ac45edd2aea3dec18eeb8b9c07c7eb93f/CHANGELOG.md#features)

About the re-rendering they say That's really just how React components with children work(check this [link](https://github.com/reactjs/react-transition-group/issues/235)), but I think it should be a way to avoid it, since the items are not changing.
Aparently React memo doesn't make any difference when using transitions

todos:
- if I don't get more info about the "Saving pictures in the picture gallery", I'll asume it was for mobile native language.


App deployed to: https://deviget-reddit-posts-reader.web.app/