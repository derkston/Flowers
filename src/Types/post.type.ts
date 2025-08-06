export interface IPost {
	id : number ,
	title : string,
	date : string,
	image : string,
	short_description : string,
	full_description : string,
}
export type TAllPost = Array<IPost>