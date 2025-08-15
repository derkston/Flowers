import { push, ref, set } from "firebase/database"

import type { IPost } from '../Types/types'
import { db } from './firebase'
const draftsRef = ref(db, 'posts');

export async function createNewDraftArticle(post : IPost) {
  try {
    const newPostRef = push(draftsRef);
    await set(newPostRef, post);
    alert('Статья успешно создана');
    return newPostRef.key;
  } catch (error) {
    alert('Произошла ошибка при создании статьи');
    throw error;
  }
}
