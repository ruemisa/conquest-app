# CONQUEST #

** Conquest ** is a Full-stack mobile app created using a Front-end React-app and a Back-end Rails API server. It is designed for people who love to explore urban areas and share those to their friends. 

## Table of Contents ## 

1. Project Link and Description 
1. Technologies Used
1. Installation 
1. Components 
1. Author's Notes & Future Features 
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

* Landing Page 
  * Contains the App Logo, name, and a Login and Signup buttons.

* Login Page 
  * Login form. It has a link to go to the Signup page if user is not a community member yet. 

* Signup Page 
  * Signup form. It also has a link to the Login Page, just in case the user presses the Login button on Landing Page by accident. 

* Dashboard
  * Upon Login or Signup, user is taken to the personal app dashboard.
  * Toolbar/Header Panel is seen where the Logo and Navigation Menu is located. 
  * Personal Map. This is where the Points of Interest (POI) are marked. 
  * Notification Panel. Currently, it states that a point has been added.
  * Add POI panel. This adds the current user's position to the personal map. It also allows the user to save information about that POI. 

* Profile Page 
  * Toolbar/Header is also present here. 
  * This is the user's personal profile wherein just a profile picture, name, and user's origin location (city of residence).
  * Edit button is added to allow users to edit their personal information (at least, the general details available on the profile page).
  * Stats Panel. This is where user's stats will be placed. However, the panel is currently inactive. 
  * Back (Button). To allow users to return to the previous page (currently, it just returns to the dashboard).

* Friends Page 
  * Displays a small list of friends. Link will be added to display a full page of user's friends. 
  * Search Users element. Allows users to search for other users. Currently Inactive. 

* Navigation Bar 
  * Contains links to the profile page, friends page, and signout (currently in the works).

#### Author's Notes & Future Features ####

* Future Features 
  1. Geolocation Marker. (Currently in the works)
  1. User search & Friendship association. 
  1. User Profile page to allow users to edit info and upload a profile pic. 
  1. Upload image along with information of POI. Better save point functionality and UI. 
  1. Allow users to share these POIs with other users.
  1. Mini game element (from original idea). Allow users to compete with each other into conquering each other's territory. Conquests is the name of the app after all. 

* Author's Notes.
  As it currently stands, the app only has limited capabilities. I just established a base for an ongoing project. As the app grows, I might employ other people's help. 

  I do hope some day, I will be able to launch this in order to help users who love exploring places remember discoveries that they may come accross. They may have created a certain memory of that place. One of the key goals of this app is to help them store that memory.

  This is an ongoing project that I plan to build further as my skills grow further. 

  I know it might have been easier to create this through react native, which I plan to do after fleshing out what I need to do to improve the current status of the app first. 

  By the way, in order to use react-google-maps properly, you need to also refer to the actual google maps documentation: 

  https://developers.google.com/maps/documentation/javascript/tutorial

  
#### Author ####

Ruel Alfonso Misa