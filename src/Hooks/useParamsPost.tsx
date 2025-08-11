import { child, get, ref } from 'firebase/database'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from '../Firebase/firebase'
import type { IPost } from '../Types/types'

export function useParamsPost(){
	const [ParamsPost , setParamsPost] = useState<IPost | undefined>(undefined)
	const {id} = useParams();
	useEffect(() => {
		const dbRef = ref(db); // Ссылка на корень базы данных
		// Запрос на получение всех постов 
		if(id != undefined){
			get(child(dbRef, `posts`)).then((snapshot) => {
			if (snapshot.exists()) {
					// Проходимся по постам , если встречается нужный пост по ID , то возвращаем его 
					snapshot.forEach((childSnapshot) => {
						const postId = childSnapshot.key;
						const postData = childSnapshot.val()
						if(id == postId){
							setParamsPost({ id: postId, ...postData });
						}
					});
				} else {
					console.log("Нет постов в базе данных.");
				}
			}).catch((error) => {
				console.error("Ошибка при однократном получении постов:", error);
			});
		}
	}, [id])
	return { ParamsPost , PostParamsID : id}
}