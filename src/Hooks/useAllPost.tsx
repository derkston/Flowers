import { onValue, ref } from 'firebase/database'
import { useEffect, useState } from 'react'
import { db } from '../Firebase/firebase'
import type { IPost } from '../Types/types'

export function useAllPost(){
	const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const postsRef = ref(db, 'posts'); // Ссылка на узел 'posts'
    // Подписываемся на изменения данных в реальном времени
    const unsubscribe = onValue(postsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const loadedPosts: IPost[] = [];
        // В объекте data хранятся объекты , где ключ это ID статьи 
        for (const id in data) {
          loadedPosts.push({id : id , ...data[id]})
        }
        setPosts(loadedPosts);
        setLoading(false);
      } else {
        setPosts([]); // Если данных нет, очищаем список
        setLoading(false);
      }
    }, (err) => { // Обработка ошибок
      console.error("Ошибка при чтении постов:", err);
      setError("Не удалось загрузить посты.");
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
	return {posts , loading , error}
}