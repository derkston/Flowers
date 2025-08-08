import { useState, type DragEvent } from 'react'
import style from './DragAndDrop.module.css'
export const DragAndDrop = () => {
	const [drag , setDrag] = useState(false);

	function dragStartHandler(e: DragEvent<HTMLDivElement>): void {
		e.preventDefault();
		setDrag(true)
	}

	function dragLeaveHandler(e: DragEvent<HTMLDivElement>): void {
		e.preventDefault();
		setDrag(false)
	}

	function onDropHandler(e: DragEvent<HTMLDivElement>): void {
		e.preventDefault();
		const files : File[] = [...e.dataTransfer.files]
		// const formData = new FormData();
		console.log(files)
		setDrag(false)
	}

	return <div className={style.drag_and_drop}>
			{
				drag 
				? <div
					onDragStart={e => dragStartHandler(e)}
					onDragLeave={e => dragLeaveHandler(e)}
					onDragOver={e => dragStartHandler(e)}
					onDrop={e => onDropHandler(e)}
					className={style.drop__area}>Отпустите картинки для загрузки</div> 
				: <div 
					className={style.drop__area}
					onDragStart={e => dragStartHandler(e)}
					onDragLeave={e => dragLeaveHandler(e)}
					onDragOver={e => dragStartHandler(e)}
				>Перенесите картинки для загрузки</div>
			}
	</div>
}
