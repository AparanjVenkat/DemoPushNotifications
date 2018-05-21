// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB2KbLGxsU3WtPqPD7TebUo_9rertGqduQ",
    authDomain: "pushdemo-bcc1a.firebaseapp.com",
    databaseURL: "https://pushdemo-bcc1a.firebaseio.com",
    projectId: "pushdemo-bcc1a",
    storageBucket: "",
    messagingSenderId: "128927084883"
  }
};
