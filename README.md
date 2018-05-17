# [Alauda](alauda.herokuapp.com)
[![Build Status](https://travis-ci.org/fac-13/allauda.svg?branch=master)](https://travis-ci.org/fac-13/allauda)

Alauda is a Progressive Web App that can be added to the user's mobile homescreen and behave as a native app.  

The idea behind this app is to provide inspiring content to users who reach for their phone first thing in the morning and would like to start their day with a feed that interests them and that is not too intense so that they can ease into their day.  

In its first iteration after a 7 day sprint it filters the News API for articles that are within the user's interests and provides random content to users who are not registered/logged in.
It also updates the content regularly through scheduled API calls.

## Stack:
NodeJS with Express and Handlebars
Mongo DB with Mongoose
Network first PWA with hybrid SSR/CSR
Testing: Jest

## The team:
- QA: Parissa
- DevOps: Giulia
- Scrum master: Katia
- UX: Ivi

### Design week:
- Hypothesis #1: an alarm clock that wakes up the user with random music/content every day
- Needed to be a PWA and be available on mobile
- We learnt that a PWA currently cannot interact with the alarm clock which lead to:
- Hypothesis #2: 'inspiring morning content' service with a twist: we would ask the users to tell us what they *don't like* so that we still provide the main content within their interests but also add a surprise package with a content that might be in the realm of their dislikes, something that they certainly wouldn't look for themselves but might find interesting after all. The idea was to increase serendipity and spontaneous discovery of content that is not within one's interests.
- User testing showed that the users don't expect to be asked to provide information on what they dislike, it goes against natural user behaviour in an app and they spontaneously ticked boxes for likes instead dislikes;

##Lessons learned

