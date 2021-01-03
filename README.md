# weather-app

![alt text](https://i.ibb.co/Svr6nFy/eliran-heorlo-test-netlify-app-1.png)

see live at `https://eliran-heorlo-test.netlify.app/`

## ReactJS

ReactJS single page application with accuWeather api.
This app is a simple weather app that uses redux and hooks for state management.

## **Pages**

- **Home**

  > search for a location or search by GEO location(lat,lon)

- **Favorites**

  > view your favorites and click to see them.


# Router Structure

```


       <Router >
            <Header></Header>
       
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/favorites">
                    <Favorites />
                </Route>
             </Switch>
      </Router>
}
```

<!-- ## Card Object Description -->

## Available Scripts

In the project directory, you can run:
Please remember to provide a .env file with your own youtube api key.
in this structure:
`REACT_APP_API_KEY=YOUR_KEY_HERE`

see '.sample-env' file.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
