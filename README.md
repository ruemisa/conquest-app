# CONQUEST #

** Conquest ** is a Full-stack mobile app created using a Front-end React-app and a Back-end Rails API server. It is designed for people who love to explore urban areas and share those to their friends. 

## Table of Contents ## 

1. Project Link and Description 
1. Technologies Used
1. Installation 
1. Components 
1. Author's Notes & Future Features 
1. Credits
1. Author

#### Project Link ####

The project is currently deployed live on heroku. Link to the project is: https://conquest-poi-app.herokuapp.com/ 

For a better user experience, please use through mobile devices since it was engineered following a mobile-first design approach. 

The app is basically designed for urban explorers. Users go around and add "Points of Interest (POI)" with information regarding that point. It is saved on their personal map as a sort of reference, especially if it is a spot that people rarely know of. 

Users can sign up or can use this demo login:

Login       | Password
------------|----------
keltoh      | 111111

#### Technologies Used ####

The following technologies were used to accomplish this project: 

* React 
* Ruby on Rails
* PostgreSQL (production)
* SQLite3 (development)
* ActiveRecord
* Heroku
* JavaScript (ES6 and beyond)
* CSS3

Packages and Gems:

* react-google-maps
* react-router-dom
* bcrypt
* rack-cors

API

* Google API

#### Installation ####

If you wish to use the following files, you will need the following:

For Ruby on Rails:

* Ruby
https://rubyinstaller.org/downloads/

* Rails
https://gorails.com/setup/ubuntu/18.10 (you can select your OS)

* Bundler
``` {r engine='sh'}
$ gem install bundler
```

For the gems, you need to just uncomment the following on your Gemfile: 

bcrypt: https://github.com/codahale/bcrypt-ruby
rack-cors: https://www.rubydoc.info/gems/rack-cors/1.0.2

When you uncomment these gems (both are shipped with rails) on the Gemfile, you should run:
``` {r engine='sh'}
$ bundle install
```

For React: 

* Nodejs 
https://nodejs.org/en/

* NPM 
https://www.npmjs.com/    

or 

* Yarn 
https://yarnpkg.com/en/

* Create-react-app
https://github.com/facebook/create-react-app

* React-router-dom
https://reacttraining.com/react-router/

* react-google-maps
https://tomchentw.github.io/react-google-maps/#introduction


#### Components ####
