'use server';

import { db } from '@/lib/firebase';
import { CreateClassFormData, EditClassFormData, FormResponse } from '@/types';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { Class } from './schema';
import { revalidatePath } from 'next/cache';

const COLLECTION_NAME = 'Classes';

export const getClasses = async (): Promise<Class[] | null> => {
  try {
    const qs = await getDocs(collection(db, COLLECTION_NAME));
    return qs.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      students: doc.data().students,
      createdAt: new Date(doc.data().createdAt),
      updatedAt: new Date(doc.data().updatedAt),
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
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    revalidatePath('/admin/classes');

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

export const updateClass = async ({
  id,
  name,
}: EditClassFormData): Promise<FormResponse> => {
  try {
    await updateDoc(doc(db, COLLECTION_NAME, id), {
      name: name,
    });

    revalidatePath('/admin/classes');

    return {
      type: 'success',
      message: 'Class updated successfully',
    };
  } catch (error) {
    return {
      type: 'error',
      message: `${error}`,
    };
  }
};

export const deleteClass = async (id: string): Promise<FormResponse> => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));

    revalidatePath('/admin/classes');

    return {
      type: 'success',
      message: 'Class deleted successfully',
    };
  } catch (error) {
    return {
      type: 'error',
      message: `${error}`,
    };
  }
};
