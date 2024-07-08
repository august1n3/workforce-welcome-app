import { firebaseApp } from "../firebaseInit";
import { getFirestore, doc, setDoc} from "firebase/firestore";

const database = getFirestore(firebaseApp);

async function addNewUserToDB(uid: string, Companyname: string,Phonenumber: string,email: string){
  /*  await setDoc(doc(database, "users", uid), {
        userId: uid,
        Companyname: Companyname,
        Phonenumber: Phonenumber,
        email: email
      });
*/}

export{addNewUserToDB}



