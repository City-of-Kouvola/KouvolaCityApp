# Kouvola City App

Kouvola City App is a React Native application derived from the open-city-skeleton and open-city-hml repositories, but is developed with newer techniques.

Kouvola city needed a new channel to reach Kouvola municipality inhabitants. 

## App Functionalities

* Splash Screen
* Static Home view as welcome screen
* Drawer navigation to navigate between multiple views
    * [open-city-kvl-modules](https://github.com/punosmobile/open-city-kvl-modules) webview in screens which doesn’t require basic navigation functionalities inside page
    * [React-native-inappbrowser-reborn](https://github.com/proyecto26/react-native-inappbrowser) in web views which require navigation functionality
    * Redirect to open other Kouvola related applications or redirecting users to store pages of these applications


Kouvola City App has been developed using:

`"React": "16.9.0"`

`"React-Native": "0.61.4"`

`”TypeScript”: “3.6.3”`

## Getting Started

1. Setup React Native development environment https://facebook.github.io/react-native/docs/getting-started.html
2. Clone the repository i.e with Git using `git clone https://github.com/punosmobile/KouvolaCityApp.git`
3. `npm install`
4. `cd ios && pod install` (if developing for iOS)
5. `npm start`

The application uses [open-city-kvl-modules](https://github.com/punosmobile/open-city-kvl-modules) repository, which contains modules that implement some specific functionality and can be installed to a derivate app.
