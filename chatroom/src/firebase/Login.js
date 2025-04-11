import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from './firebase';

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error('Login error:', error.message);
    }
};

export const handleLogout = async () => {
    try {
        await signOut(auth);
        console.log('User signed out.');
    } catch (error) {
        console.error('Error signing out:', error.message);
    }
};