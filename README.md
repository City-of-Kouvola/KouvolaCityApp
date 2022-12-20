# Kouvola City App

Kouvola City App is a React Native application derived from the open-city-skeleton and open-city-hml repositories, but is developed with newer techniques.

Kouvola city needed a new channel to reach Kouvola municipality inhabitants. 

## App Functionalities

* Splash Screen
* Static Home view as welcome screen
* Drawer navigation to navigate between multiple views
    * [open-city-kvl-modules](https://github.com/City-of-Kouvola/open-city-kvl-modules) webview in screens which doesn’t require basic navigation functionalities inside page
    * [React-native-inappbrowser-reborn](https://github.com/proyecto26/react-native-inappbrowser) in web views which require navigation functionality
    * Redirect to open other Kouvola related applications or redirecting users to store pages of these applications


Kouvola City App has been developed using:

`"React": "18.1.0"`

`"React-Native": "0.70.6"`

`”TypeScript”: “4.9.3”`

`node: “16.0.0”`

## Getting Started

1. Setup React Native development environment (`it is recommended to use the React Native CLI path instead of Expo`) https://reactnative.dev/docs/environment-setup
2. Clone the repository i.e with Git using `git clone https://github.com/City-of-Kouvola/KouvolaCityApp.git`
3. `npm install`
4. `cd ios && pod install` (if developing for iOS)
5. `npm start`

The application uses [open-city-kvl-modules](https://github.com/City-of-Kouvola/open-city-kvl-modules) repository, which contains modules that implement some specific functionality and can be installed to a derivate app.
