export enum Colors {
    Blue = 'blue',
    LightBlue = 'lightBlue',
    Green = 'green',
    LightGreen = 'lightGreen',
    Pink = 'pink',
};

export interface Archivement {
    award: string;
    year?:string;
    color?:Colors;
    contest: string;
    image: string;
}