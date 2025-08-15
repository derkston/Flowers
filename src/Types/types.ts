import type { User } from 'firebase/auth'
import type { Dispatch, JSX, SetStateAction } from 'react'
export interface IURL {
	path: string;
  component: () => JSX.Element;
  element_name: string;
}
export interface IProduct  {
	id? : string ,
	UID : string,
	author : string,
	title : string,
	image? : FormDataEntryValue,
	short_description : string , 
	full_description : string ,
	quantity : number ,
	price : number ,
}
export interface IAuthContextType {
  user: User | null;
  loading: boolean; 
}
export interface IPost {
	id? : string ,
	UID : string,
	author : string ,
	title : string,
	date : Date,
	image? : string,
	short_description : string,
	full_description : string,
}
export type TAllPost = Array<IPost>

export interface IDragAndDropProps {
  setPreviewImages: Dispatch<SetStateAction<string[]>>;
}
export type TCreateContent = 'CreatePost' | 'CreateProduct'	;
export type TPreviewContent =  'UserPosts'| 'UserProducts' ;
export type TAdminContent = TPreviewContent | TCreateContent;

export interface ICreateFormProps {
	activeForm : TCreateContent ,
	setProduct?: React.Dispatch<React.SetStateAction<IProduct | undefined>>;
  setPost?: React.Dispatch<React.SetStateAction<IPost | undefined >>; 
}