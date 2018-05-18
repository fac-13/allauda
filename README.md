[![Build Status](https://travis-ci.org/fac-13/allauda.svg?branch=master)](https://travis-ci.org/fac-13/allauda)

# Alauda 
![Alauda logo](https://github.com/fac-13/allauda/blob/master/public/images/icons/icon-384x384.png)



### Problem statement
Our user needs a way to have access to positive and inspiring content in the morning so that they don't have to search it themselves. 

### Our solution
[Alauda](https://alauda.herokuapp.com/) is a Progressive Web App which, every day, present users with a selection of articles matching their interests, using the News API.

### From a music app to new(s) internet in a few pivots (the history of development)

- The original idea was to build an alarm clock that is linked with the clock of one's mobile and plays different music or sounds every morning. We planned to make it a progressive web app. We then realised that PWA is not fit for purpose and changed the app idea.

- We decided to make a PWA that send the subscribed users push notifications every morning containing music and pictures the users might like. After exploring music APIs we abandonded this idea. Heads up - we are still waiting for an API key from the Free Music Archive (it has been three weeks).

- We then decided to use News APIs and send users positive news they might be interested in. Then we explored push notifications and realised that we don't have time to figure out how to use one in our project.

### Screenshot

![Alauda screenshot](https://user-images.githubusercontent.com/29815092/40229539-6fc01346-5a8c-11e8-8a71-5bb55c97950b.gif)

### Who - our team

|   Name   |                                                          Github                                                                                                      |                                   Twitter                                    |
| :------: | :----------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
|  Giulia - **DevOps**   | [![Foo](https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-16.png)](https://github.com/GiuliaTeggi)|
|  Ivi - **UX**  | [![Foo](https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-16.png)](https://github.com/isnotafunction) | [![Foo](https://twitter.com/favicon.ico)](https://twitter.com/isnotafunction)|
|   Katia - **Scrum Master**  |   [![Foo](https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-16.png)](https://github.com/missKatiaPunter)   |   [![Foo](https://twitter.com/favicon.ico)](https://twitter.com/4theLoveOfCode)  |                                                                              |
| Parissa - **QA** | [![Foo](https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-16.png)](https://github.com/Parissai)  | [![Foo](https://twitter.com/favicon.ico)](https://twitter.com/Sottotitolato)  |

## HOW to run the app locally

* Make sure you have [MongoDB](https://www.mongodb.com) and [Node JS](https://nodejs.org/en/) set up on your local computer.
* Fork the repo and navigate to your local folder where you would like to store its local copy
* Clone the repo
`git clone git@github.com:fac-13/allauda.git`
* Set up the API keys. This projects uses .env file where you should store YOUR News API key. You can [get the API key here](https://newsapi.org/).
* Set up the path to your local database. An exmple of such path that should be in your .env file is `DATABASE_URL=mongodb://localhost/alaudadb`
* Create SECRET in your local .env file. It can be any word you choose.
* An example of .env file that should be in the root of your local project is below:
```
DATABASE_URL=mongodb://localhost/alaudadb
SECRET=alauda
NEWS_KEY=blahblahblah
```
* `npm install` or `npm i` to download Node modules that are used by the app locally.
* `npm run dev` to run the app locally.
* You can view the app on http://localhost:3000/

#### Testing

`npm test` or `npm t` will run the tests



## Tech stack
 

| Front end             | Backend              | Testing    | 
|:---------------------:|:--------------------:|:----------:|
| HTML5                 | Node.js              | Jest       | 
| CSS3 (BEM)            | Express              | Travis CI  | 
| Javascript            | Handlebars           |            |                    
|                       | MongoDB              |            |                    
