# Instagram-Clone
This project is an Instagram clone built using Next.js, Tailwind CSS, NextAuth, Recoil, and Firebase as a database. It implements clean architecture throughout the project.

## Features
* Users can sign up and log in using Google Authentication
* Users can post posts with a picture and captions
* Users can like and comment on other users' posts
* Users can follow and unfollow other users
* Users can watch other users' stories

## Built With
* Next.js
* React
* Firebase Firestore
* Firebase Storage
* Tailwind CSS
* NextAuth
* Recoil

## Installation
To install and run this project on your local machine, follow these steps:
1. Clone this repository onto your machine
2. Navigate to the project directory in your terminal
3. Run 'npm install --legacy-peer-deps' to install all the required dependencies
4. Open Firebase Console > Create a new project > Click on Project Settings > Click on Web app > Click on Register app
5. Copy the config data and paste it into the "const firebaseConfig" in the firebase.js file
6. On the Firebase Project click on Authentication - Get Started > Click on Google > Click Enable > Set support email > Click on Web SDK configuration and open the .env.local file:
* Set the Web client ID into the GOOGLE_CLIENT_ID variable (without "")
* Set the Web client secret into the GOOGLE_CLIENT_SECRET variable (without "")
* Click on Save

8. Go to cloud.google.com and sign in to the same account > Click on Console > Make sure you are on the correct project > Click on the Menu - Api & Services > Credentials > Edit the OAuth:
* Add http://localhost:3000 to the "Authorised JavaScript origins"
* Add http://localhost:3000/api/auth/callback/google to the "Authorised redirect URIs"
* Click on Save
9. 
