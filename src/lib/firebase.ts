import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/**
 * Shared function to submit any form data to Firestore
 * @param formName Name of the form (e.g. 'contact-form', 'quote-request')
 * @param data The form data object
 */
export const submitWebsiteForm = async (formName: string, data: any) => {
    try {
        // IMPORTANT: The path is /websites/truewaves-site/YOUR_FORM_NAME
        const collectionRef = collection(db, "websites", "truewaves-site", formName);
        
        const docRef = await addDoc(collectionRef, {
            ...data,
            timestamp: serverTimestamp(),
            source: formName
        });
        
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { success: false, error };
    }
};
