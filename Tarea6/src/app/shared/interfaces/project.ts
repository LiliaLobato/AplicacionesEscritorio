export enum Type {
    Software = 'software',
    Hardware = 'hardware',
    Mixed = 'mixed',
};

export interface Project {
    projectName: string;
    techinicalName: string;
    projectType: Type;
    image: string;
}
