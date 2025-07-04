# Fruit Fusion SmartECommerce

A modern e-commerce mobile app built with React Native, Expo, Redux Toolkit, Firebase, and TypeScript.

![FF](https://github.com/user-attachments/assets/a76aa47d-1001-4951-ab8b-fb37999497f0)

## Features

- User authentication (Firebase)
- Product listing and cart management
- Order checkout flow
- Multi-language support (i18next)
- Responsive UI with custom components
- State persistence with redux-persist

## Tech Stack

- React Native (Expo)
- TypeScript
- Redux Toolkit & redux-persist
- Firebase (Auth, Firestore)
- i18next (localization)
- React Navigation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Yarn](https://classic.yarnpkg.com/lang/en/) or npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/smartecommerce.git
   cd smartecommerce
   ```

2. **Install dependencies:**

   ```sh
   yarn install
   # or
   npm install
   ```

3. **Start the Expo development server:**

   ```sh
   yarn start
   # or
   npm start
   ```

4. **Run on your device:**
   - Scan the QR code with [Expo Go](https://expo.dev/client) on your iOS/Android device.

## Project Structure

```
src/
  assets/           # Images and fonts
  components/       # Reusable UI components
  config/           # Firebase and other configs
  data/             # Static data
  helpers/          # Utility functions
  hooks/            # Custom React hooks
  localization/     # i18n files
  navigation/       # Navigation stacks
  screens/          # App screens
  store/            # Redux store and slices
  styles/           # Shared styles
  types/            # TypeScript types
```
