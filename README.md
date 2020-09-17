## Development Process
1. Make sure you are using either a js extension.
1. run yarn install to install all the dependencies 
1. Write tests first, even if you are creating a component.
1. Make your test pass by building out the feature. yarn test
1. Commit and push your code; code will be checked for eslint lint errors automatically
1. Check CircleCI for failures 
## Development Tips
1. When building components out, have yarn storybook running to see the build
1. To run Cypress commands in browser, run yarn e2e
## Available Scripts
In the project directory, you can run:
### yarn start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.
### yarn storybook
Runs the app in the development mode.
Open http://localhost:9009 to view it in the browser.
This allows you to view the components API and to build out components.
### yarn lint
Lints the application and will eslint errors to fix.
yarn lint --fix
This will auto lint the codebase for you where it can autofix.
Code that is not linted will return errors.
### yarn test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
### Deployment and live site
Deployment was created using a static site generator called Netifly. Here is the live link, https://5f6298b979cfd70008fc618f--dreamy-mestorf-928af1.netlify.app/ (If you don't have an account, you need to create one, it's free)


## Other Considerations:

There is a react warning generated by Material-table. This warning is unavoidable at the moment and is an open issue in the open-source project. Waiting for fix release on the material table:https://github.com/mbrn/material-table/pull/2369



## Summary

I wanted this assignment to emulate a real application. With that said, I decided to build two additional screens, a login screen, and edit users' screens. The project was gratifying, and I think my ambitions took the best of me, so it took me longer than expected to finish. Overall I would put my time to completion at 20 hours. Some things to take into consideration are that I reviewed your companies job requirements to determine which technologies I should integrate into the app. I have not had experience with all these technologies, which also factored into the time to completion. Lastly, I wanted to mock a project that was easy to follow and give a developer the experience that he was joining a full-stack application. Some cool features I did to emulate this was adding pre-commit hook that tests different parts of the code before staging. 


## Technologies used
* storybook 
* cypress
* jest
* enzyme
* javascript 
* material-ui
* material-table
* lodash
* husky
* eslint
* prettier
* axios
* babel
* react/context api

## MVPS

* switch between a starter box tab and a refill box tab
* add a starter box based on users bursh_color
* add a refill box based on users bursh_color

## Bonus features

* protected routes
* CRUD table to edit users data before shipping screen
* login modal
* eslint configuration 
* loading component displayed until data is fetched


## Honest Opinion

Overall I believe I did very well in executing the project. Some things I think I could have done better was integration testing and e2e testing.

## Future considerations

* adding a backend for user auth and fetching data (rails backend, of course ;) )

* adding a page header the displays the manager's name and hold a button to allow him to logout 

* adding a reset data so that the manager can clear which boxes were added


