import { push, ref, set } from "firebase/database";

import type { IPost } from '../Types/types';
import { db } from './firebase';




// Теперь 'database' уже инициализирована и готова к работе
const draftsRef = ref(db, 'posts');

export async function createNewDraftArticle(post : IPost) {
  try {
    const newPostRef = push(draftsRef);
    await set(newPostRef, post);
    alert("New draft article created successfully with ID:" +  newPostRef.key);
    return newPostRef.key;
  } catch (error) {
    alert("Error creating new draft article:" +  error);
    throw error;
  }
}
