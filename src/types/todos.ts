export interface StateType {
   todos: TodoType[]
}

export interface sliceType {
   todo : StateType
}


export interface TodoType {
   id : number;
   checked ?: boolean;
   todo: string;
}
