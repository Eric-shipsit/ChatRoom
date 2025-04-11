import { signInWithGoogle } from '../firebase/Login'

const SignIn = () => {
    return (
        <button onClick = {signInWithGoogle}>Sign in with Google</button>
    );
}

export default SignIn;