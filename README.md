# trick-or-treat

A lightweight web app to allow trick-or-treaters to "check-in" so you can make a donation on behalf of each one.

![Demo](src/assets/TrickOrTreatDemo.gif)

This project is a simple Preact app, using Airtable for it's data store. H/t to [@johnpolacek](https://twitter.com/johnpolacek/status/1317454003974905863?s=20) for the "Trick or treat it forward" idea.

## Forking for personal use

Feel free to fork this repo and deploy if you also want to "Trick or treat it forward". I built it so you can deploy as-is and just set environment variables to change the configuration that will be specific to you. And you can always customize to make it more "you" 🤗

### Data store - Airtable

You'll need an Airtable account with a base and table set up matching this project's schema. 

The table you set up needs 2 columns: `id` and `costume`. I also have a `createdAt` column for ease of sorting and removing my data from testing but this is optional.

Then you'll need to update your environment variables for your Airtable configuration

```bash
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
AIRTABLE_TABLE_NAME=
```

### Display settings
To change the displayed donation organization and the donation amounts, you'll need to update your environment variables.

```bash
DONATION_MAX=
DONATION_PER_PERSON=
DONATING_TO=
DONATING_TO_WEBSITE=
```

### Deployment platform
You should be able to deploy this site using whatever deployment tools are your favorites but I use Netlify. You can set your environment variables in the UI and this should "just work."

## Technologies used

- [Yarn](https://yarnpkg.com/) for package managment
- [Preact](https://preactjs.com/) as the JS framework
- [Dotenv](https://github.com/motdotla/dotenv) for managing environment variables  (I use Dotenv safe so the build fails if we forget to set an environment variable)
- [uuid](https://github.com/uuidjs/uuid) for generating unique ids
- [indefinite](https://github.com/tandrewnichols/indefinite) for choosing the correct indefinite article for costumes since English is weird with lots of irregular nouns

## Preact documentation

### CLI Commands

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# test the production build locally
yarn serve

# run tests with jest and enzyme
yarn test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
