export interface Todo {
    id: string;
    title: string;
    done: boolean;
}

export enum Tab {
    TODO = 'TODO',
    DONE = 'DONE',
    ALL = 'ALL',
}
