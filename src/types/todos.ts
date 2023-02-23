export interface StateType {
   todos: TodoType[];
   filteredTodos: TodoType[];
   isDarkMode : boolean
}


export interface sliceType {
   todo : StateType
}


export interface TodoType {
   id : number;
   checked ?: boolean;
   todo?: string;
}

export interface PayloadType {
   todo : string;
   id: number
}


export interface memoType {
   main : TodoType[]
   active : TodoType[]
   complete : TodoType[]
}