'use server';

import { db } from '@/lib/firebase';
import { CreateClassFormData, FormResponse } from '@/types';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Class } from './schema';

const COLLECTION_NAME = 'Classes';

export const getClasses = async (): Promise<Class[] | null> => {
  try {
    const qs = await getDocs(collection(db, COLLECTION_NAME));
    return qs.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
    }));
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createClass = async ({
  name,
}: CreateClassFormData): Promise<FormResponse> => {
  try {
    await addDoc(collection(db, COLLECTION_NAME), {
      name: name,
      students: [],
    });
    return {
      type: 'success',
      message: 'Class created successfully',
    };
  } catch (error) {
    return {
      type: 'error',
      message: `${error}`,
    };
  }
};
