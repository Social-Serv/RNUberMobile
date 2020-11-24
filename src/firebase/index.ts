import firebase from 'firebase';

export default {
  // auth methods
  async register(email, password) {
    const newUserUid = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        return userCredential.user.uid;
      });
  },
  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  logout() {
    return firebase.auth().signOut();
  },
};
