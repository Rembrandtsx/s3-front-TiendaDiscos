// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular.json`.

export const environment = {
  production: false,
  apiUrl: "http://localhost:8080/s3_tiendadiscos-api/api/",
  firebase: {
    apiKey: "AIzaSyBk7YXLqrv_AYKsV-QBBVej2zmGU-Nwq0Q",
    authDomain: "vinylapp-f21d3.firebaseapp.com",
    databaseURL: "https://vinylapp-f21d3.firebaseio.com",
    projectId: "vinylapp-f21d3",
    storageBucket: "vinylapp-f21d3.appspot.com",
    messagingSenderId: "64096031088"
  }
};
