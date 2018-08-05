import * as firebase from 'firebase';

export class AuthService {
    sigupUser(email: string, password: string) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }
}
