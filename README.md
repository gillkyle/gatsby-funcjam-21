![Goal Tracker dashboard](https://raw.githubusercontent.com/gillkyle/images/master/CleanShot%202021-08-27%20at%2020.08.50%402x.png)

# Goal Tracker (Gatsby FuncJam '21)

This app relies on Gatsby functions to track goals, using airtable as a database, and a custom UI with some beautiful data viz components built with Tailwind.

[View it live](https://gatsbyfuncjam21.gatsbyjs.io/)

## Installation

To start the site:

- duplicate the Airtable base for the goal tracker using the [copy base link](https://airtable.com/addBaseFromShare/shrUpUS4fnwJInCVn?utm_source=airtable_shared_application)
- clone this repo: `git clone https://github.com/gillkyle/gatsby-funcjam-21` (or using the ssh link)
- change directories/folders: `cd gatsby-funcjam-21`
- copy the `.env.example` file into your own `.env`: `cp .env.example .env`
- add in the airtable key and app id from your own version of the airtable base
- run: `npm install` or `yarn` to add all necessary packages
- run: `npm start` or `yarn start` to boot up the site

To test a function:

- send a POST request to the `/api/airtable` endpoint with some required fields in the body:

```shell
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"date":"2021-08-28","baseName":"Journal","status":"Done","password":"somepassphrase"}' \
  http://localhost:8000/api/airtable
```

This will save a new row in the Journal base, with a status of Done.

## Read about how and why this was made

I wrote a blog post about why I wanted a tool like this, and why I love being able to build them myself. You can read it here:

[https://kylegill.com/essays/programming-a-better-life#a-personal-goal-tracking-app](https://kylegill.com/essays/programming-a-better-life#a-personal-goal-tracking-app)

## Submission Checklist

- [x] Add installation documentation to the README
- [x] Update the `/api` folder with your function
- [x] Submit your entry at https://gatsbyjs.com/func-jam-21/
