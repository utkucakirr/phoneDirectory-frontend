import { Person } from "./person";

export interface PersonResponseModel{
    data:Person[];
    success:boolean;
    message:string;
    
}