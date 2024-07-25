import { SHOW_ALL } from "../constants/todo-filters";

function getFilteredTodos(todos, filter) {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        default:
            return todos;
    }
}

export function getVisibleTodos(todos, route) {
    return getFilteredTodos(todos, route);
}

export function getCompletedTodos(todos) {
    //TODO: this function is to be implemented
    return 0;
}
