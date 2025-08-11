import type { User } from 'firebase/auth'
import type { Dispatch, SetStateAction } from 'react'

export interface IProduct  {
	id : number ,
	author : string,
	title : string,
	short_description : string , 
	full_description : string ,
	quantity : number ,
	price : number ,
}
export interface AuthContextType {
  user: User | null;
  loading: boolean; 
}
export interface IPost {
	id : string,
	author : string ,
	title : string,
	date : string,
	image? : string,
	short_description : string,
	full_description : string,
}
export type TAllPost = Array<IPost>

export interface IDragAndDropProps {
  setPreviewImages: Dispatch<SetStateAction<string[]>>;
}
export type CreateContent = 'CreatePost' | 'CreateProduct'	;
export type PreviewContent =  'UserPosts'| 'UserProducts' ;
export type TAdminContent = PreviewContent | CreateContent;

export interface ICreateFormProps {
	activeForm : CreateContent ,
	setProduct?: React.Dispatch<React.SetStateAction<IProduct | undefined>>;
  setPost?: React.Dispatch<React.SetStateAction<IPost | undefined >>; 
}