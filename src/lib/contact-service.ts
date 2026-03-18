import { 
  collection, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  addDoc,
  serverTimestamp,
  type DocumentData,
  type QuerySnapshot
} from 'firebase/firestore';
import { db } from './firebase';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  inquiry?: string;
  message?: string;
  status: 'new' | 'read' | 'contacted';
  createdAt: string;
}

const COLLECTION_NAME = 'contact-submissions';
const SITE_ID = 'truewaves-site';

// Helper to get the collection reference
const getSubmissionsRef = () => collection(db, 'websites', SITE_ID, COLLECTION_NAME);

export const getSubmissions = async (): Promise<ContactSubmission[]> => {
  try {
    const q = query(getSubmissionsRef(), orderBy('timestamp', 'desc'));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        inquiry: data.inquiry || '',
        message: data.message || '',
        status: data.status || 'new',
        createdAt: data.timestamp?.toDate()?.toISOString() || new Date().toISOString(),
      } as ContactSubmission;
    });
  } catch (error) {
    console.error("Error getting submissions: ", error);
    return [];
  }
};

export const saveSubmission = async (data: Omit<ContactSubmission, 'id' | 'status' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(getSubmissionsRef(), {
      ...data,
      status: 'new',
      timestamp: serverTimestamp(),
      source: 'contact-form'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving submission: ", error);
    return { success: false, error };
  }
};

export const updateSubmissionStatus = async (id: string, status: ContactSubmission['status']) => {
  try {
    const docRef = doc(db, 'websites', SITE_ID, COLLECTION_NAME, id);
    await updateDoc(docRef, { status });
    return { success: true };
  } catch (error) {
    console.error("Error updating status: ", error);
    return { success: false, error };
  }
};

export const deleteSubmission = async (id: string) => {
  try {
    const docRef = doc(db, 'websites', SITE_ID, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting submission: ", error);
    return { success: false, error };
  }
};
