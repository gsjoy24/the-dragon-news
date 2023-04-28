import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut
} from 'firebase/auth';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

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

	// sing in function
	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// sing out function
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
		createUser,
		signInUser,
		signOutUser,
		addPhotoAndName
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
