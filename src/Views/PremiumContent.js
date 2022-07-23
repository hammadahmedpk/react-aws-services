import { Authenticator } from "@aws-amplify/ui-react"; // For authentication
import '@aws-amplify/ui-react/styles.css'; // For styling of the authenticator
import {Auth} from 'aws-amplify';

// For signing out the user
async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

function PremiumContent(){
    return(
        <Authenticator>
            <h1>You are viewing this page only because you are authenticated!😎</h1>
            <button onClick={signOut}>Sign Out</button>
        </Authenticator>
    );
}

export default PremiumContent;