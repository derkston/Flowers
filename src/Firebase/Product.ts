import { push, ref, set } from "firebase/database"

import type { IProduct } from '../Types/types'
import { db } from './firebase'
const draftsRef = ref(db, 'products');

export async function createNewDraftProduct(product : IProduct) {
	try {
		const newPostRef = push(draftsRef);
		await set(newPostRef, product);
		alert('Товар успешно создан');
		return newPostRef.key;
	} catch (error) {
		alert('Произошла ошибка при создании товара');
		throw error;
	}
}
