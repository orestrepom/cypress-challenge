# Endava-challenge

# Cypress Integration Testing

[Cypress](https://www.cypress.io/) is used for UI integration testing. This provides a better testing development experience than Selenium-based frameworks.

## Essential Setup

1. Clone this repo:

```
git clone https://github.com/orestrepom/endava-challenge/
```

2. Make sure you have **node** 
   https://phoenixnap.com/kb/install-node-js-npm-on-windows
3. open a terminal window in the folder where you downloaded the repo
4. run "npm install"
5. to run cypress via UI run: npx cypress open (please note the only Test files are the ones with "spec.js" extension the ones which has ".js" only are not runnable cases).
6. to run via command line run : "npx cypress run"
7. if you want to run specific test case with specific parameters you can run commands similar to this: npx cypress run --spec ".\cypress\integration\main\tests\verify-google-main-page.spec.js" --browser chrome --headless
