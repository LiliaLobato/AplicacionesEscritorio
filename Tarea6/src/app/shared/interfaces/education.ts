export enum Colors {
    Blue = 'blue',
    Pink = 'pink',
    LightGreen = 'lightGreen',
    Green = 'green',
};

export interface Education {
    degree: string;
    school?: string;
    period?: string;
    description: Array<string>;
    image: string;
    color?: Colors;
}
