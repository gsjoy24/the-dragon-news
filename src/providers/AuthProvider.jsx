import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	updateProfile,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GithubAuthProvider
} from 'firebase/auth';
export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Create user with google auth
	const googleAuthentication = () => {
		return signInWithPopup(auth, googleAuthProvider);
	};

	// Create user with github auth
	const githubAuthentication = () => {
		return signInWithPopup(auth, githubAuthProvider);
	};

	// create user function
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// add photo url and name when creating user
	const addPhotoAndName = (name, photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo
		});
	};

	// sign in function
	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// sign out function
	const signOutUser = () => {
		setLoading(true);
		return signOut(auth);
	};

	// observe if user is logged in or not
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
			setUser(loggedInUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const authInfo = {
		user,
		loading,
		googleAuthentication,
		githubAuthentication,
		createUser,
		signInUser,
		signOutUser,
		addPhotoAndName
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
