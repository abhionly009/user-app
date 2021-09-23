import firebase from "../config/firebaseConfig";

const socialMediaAuth = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export default socialMediaAuth;

//project-194740279941
