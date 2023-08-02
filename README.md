# Kouvola City App

Kouvola City App is a React Native application derived from the open-city-skeleton and open-city-hml repositories, but is developed with newer techniques. The application is a new channel to reach Kouvola municipality inhabitants in their mobile devices.

## App Functionalities

* Splash Screen
* Static Home view as welcome screen
* Drawer navigation to navigate between multiple views
    * [open-city-kvl-modules](https://github.com/City-of-Kouvola/open-city-kvl-modules) webview in screens which doesn’t require basic navigation functionalities inside page
    * [React-native-inappbrowser-reborn](https://github.com/proyecto26/react-native-inappbrowser) in web views which require navigation functionality
    * Redirect to open other Kouvola related applications or redirecting users to store pages of these applications

Modules which are managed by City of Kouvola used inside the app:
* [open-city-kvl-modules](https://github.com/City-of-Kouvola/open-city-kvl-modules) repository, which contains modules that implement some specific functionality and can be installed to a derivate app.
* [Library_card_module](https://github.com/City-of-Kouvola/Library_card_module) repository to bring library card to the device. Library module creates bar code into the application screen


Kouvola City App has been developed using:

`"React": "18.2.0"`

`"React-Native": "0.72.3"`

`”TypeScript”: “4.9.3”`

`node: “16.0.0”`

## Getting Started

1. Setup React Native development environment [React Native CLI](https://reactnative.dev/docs/environment-setup)
2. Clone the repository i.e with Git using `git clone https://github.com/City-of-Kouvola/KouvolaCityApp.git`
3. `npm install`
4. `cd ios && pod install` (if developing for iOS)
5. Android: Open Android emulator or connect real device with [USB debugging](https://developer.android.com/studio/debug/dev-options) enabled and Run command `npx react-native run-android` to start the debug version of the application
6. iOS: Open `ios/KouvolaCityApp.xcworkspace` in Xcode, select emulator or real device and start the application

## Development

When developing new features/bug fixes it is good practice to follow atleast these next steps:

1. All new feature/bug fix branches should be created from the `Develop` branch
2. Branch name could be i.e `fix/launch-issue`
3. Once changes are done and tested locally push changes to Github and create PR to the `Develop` branch
