# React Webpack Build

## react-webpack-build is a minimum build system for React using webpack.

### Get Started

Git Clone this project:

```
git clone https://github.com/reyarqueza/react-webpack-build.git
```

Install dependencies (takes about 1 minute)

```
npm install
```

### Development
Start the local server:

```
npm start
```

Open the browser at the url specified in the terminal. Add/edit React files in the src folder. After saving, your files are built automaticallty. The file /public/js/bundle.js will be created in development mode (including source maps). Refresh the browser window.

### Production
Build the app:

```
npm run build
```

The file /public/js/bundle.js will be minfied in production mode (with  source maps as a separate file ).

### Why?
Most web developers are moving towards Create React App, which is a full featured build system. react-webpack-build is useful only if you want to start off with a barebones webpack build system almost from the ground up. react-webpack-build was created as an exercise to use webpack for simple react build system. Otherwise, it is recommended to use [Create React App](https://github.com/facebook/create-react-app). 