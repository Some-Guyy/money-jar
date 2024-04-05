# MoneyJar
<img src="assets/images/readme/mj_logo.webp" width="100" />

MoneyJar, a money manager. Originally made on Android Studio for a school project (*version 1*).

<img src="assets/images/readme/old_mj1.webp" width="150" /> <img src="assets/images/readme/old_mj2.webp" width="150" />

It has now been rebuilt from scratch using [React Native](https://facebook.github.io/react-native/) v0.60.
## Information
This is a very basic finance management app made via React Native, but optimized and tested for Android. The sole reason I made this app was to try out developing something using React Native, and the only long-term user of this app is me. Therefore, it is not deployed.

How it works is it allows the users to create "jars" and put values into them. These jars are mainly used to split a single savings container into different categories for the users to keep track of how much is left in each jar.

When rebuilding version 2 via React Native, several other functions were added into the app such as the simple adding of values into a jar, and a profile tab which shows the total amount in all jars the user has.

Firebase is used for the authentication and database (*cloud firestore*).

<img src="assets/images/readme/mj1.webp" width="150" /> <img src="assets/images/readme/mj2.webp" width="150" /> <img src="assets/images/readme/mj3.webp" width="150" /> <img src="assets/images/readme/mj4.webp" width="150" /> <img src="assets/images/readme/mj5.webp" width="150" />

## Setup
### Pre-requisites:
- [NodeJS](https://nodejs.org/en/) v10.16.3 (*or above*)
- react-native-cli package (*can be installed via* ```$ npm install -g react-native-cli```)
- [Android](https://developer.android.com/studio) 9 SDK (*API level 28*)
- [JDK 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- An android device (*physical or virtual*) connected to your computer with USB debugging set to 'On'
- [Firebase](https://firebase.google.com/) account (*for the authentication and database*)

### Building the app on Android:
1. [Setup](https://firebase.google.com/docs/android/setup) your Firebase configuration file (*google-services.json*) and place it into the android app directory like so: "*/android/app/google-services.json*".
2. Run npm install in the root directory to install all the dependencies.

    ```$ npm install```
3. Build the app into your device by running:

    ```$ react-native run-android```

That's it! I'm not listing the steps to build on iOS as this app was never tested nor optimized for the iOS.
