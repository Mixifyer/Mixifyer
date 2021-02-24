<p align="center">
  <a href="https://mixifyer.herokuapp.com/">
    <img alt="im" src="public/images/mixifyer.jpg" width="200" />
  </a>
</p>
<h1 align="center">
mixifyer.herokuapp.com
</h1>

# Mixifyer

E-commerce app where you can buy your favorite drinks.site built using React, Redux, Node.js/Express, Axios, Sequelize, PostgreSQL, Stripe.

**Mixifyer uses technologies including:**
* [Stripe API](https://stripe.com/docs)
* Frontend – [React.js](https://reactjs.org/), [Redux.js](https://redux.js.org/)
* Backend – [Express.js](https://expressjs.com/), [Sequelize ORM](https://sequelize.org/), [PostgreSQL](https://www.postgresql.org/)
* Style – [CSS](https://www.w3.org/Style/CSS/Overview.en.html), [Charts.js](https://www.chartjs.org/docs/latest/)

# Authors
<h6>-Iskak Mantyubetov</h6>
<h6>-Dan DiMartino</h6>

# Installing

### Use the following commands on your local terminal to download the app and get started:##

`git clone https://github.com/Team-Orochimaru/financial-planner.git`

`cd mixifyer`

`npm install`

`createdb mixifyer`: creates postgres database

`npm run seed`: populates your local database with dummy users

`npm run start-dev`: starts developer environment with local server and webpack

Visit [localhost:8080](http://localhost:8080) to view the app on your local server.

If you want to run the server and/or webpack separately, you can also run `npm run start-server` and `npm run build-client`.

## Customize

Create a file called secrets.js in the project's root directory. This file is listed in the project's .gitignore file by default, and is only required in your environment for developmental purposes. The file attaches API-specific environment variables that you need to get started as a developer. **Be sure to keep the information contained in your secrets.js file confidential (i.e. don't push it to GitHub).**

stripe instrux:
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

const App = () => {
return (
<Elements stripe={stripePromise}>
<MyCheckoutForm />
</Elements>
);
};
```
process.env.GOOGLE_CLIENT_ID = 'hush hush'
process.env.GOOGLE_CLIENT_SECRET = 'pretty secret'
process.env.GOOGLE_CALLBACK = '/auth/google/callback'

```

### OAuth

* To use OAuth with Google, complete the steps above with a real client
  ID and client secret supplied from Google
  * You can get them from the [Google APIs dashboard][google-apis].

[google-apis]: https://console.developers.google.com/apis/credentials

## Linting

Linters are fundamental to any project. They ensure that your code
has a consistent style, which is critical to writing readable code.

Boilermaker comes with a working linter (ESLint, with
`eslint-config-fullstack`) "out of the box." However, everyone has
their own style, so we recommend that you and your team work out yours
and stick to it. Any linter rule that you object to can be "turned
off" in `.eslintrc.json`. You may also choose an entirely different
config if you don't like ours:

* [Standard style guide](https://standardjs.com/)
* [Airbnb style guide](https://github.com/airbnb/javascript)
* [Google style guide](https://google.github.io/styleguide/jsguide.html)
