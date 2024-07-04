# task-thing - `CLIENT`

- The Server/Backend Repository can be found [here](https://github.com/Thisisaarush/task-thing-server)

## Pre-requisites

### [Mac OS](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated&mode=development-build#install-watchman)

- **Watchman** is a tool for watching changes in the filesystem. Installing it will result in better performance. You can install it with:

  ```bash
  brew update
  brew install watchman
  ```

- Xcode Command Line Tools
- EAS CLI

## How to run the project

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the project on `Expo Go` app on simulator/real device.

   ***

   OR
   `Run dev build`:

   - Build on cloud with `EAS`:
     - Build the development version on cloud with `npm run build:dev:android` || `npm run build:dev:ios`
     - Then start the `dev build` using `npm run start:dev:android` || `npm run start:dev:ios`
   - Build on local:
     - Build and run with `npm run dev:android` || `npm run dev:ios`

   ***

## How to build and publish to App Stores without EAS (because EAS is paid and free tier takes forever to build)

- [Google Play Store](https://reactnative.dev/docs/signed-apk-android) - Follow this guide and replace build command(step 4) with `npm run build:prod:android`
- [Apple App Store](https://reactnative.dev/docs/publishing-to-app-store)

### Pre-requisites for building and publishing to App Stores

- [Google Play Developer Account](https://play.google.com/console/u/0/developers/8035045980270036130/app-list?onboardingflow=signup)
- [Apple Developer Account](https://developer.apple.com/programs/)
