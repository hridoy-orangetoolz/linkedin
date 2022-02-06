const admin = require("firebase-admin");

const pathServiceAccount = "../service-account-dev.json";
const serviceAccount = require(pathServiceAccount);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://social-scheduler-create-post-default-rtdb.firebaseio.com",
  storageBucket: `${process.env.GCLOUD_PROJECT}.appspot.com`,
});

module.exports = { admin };
