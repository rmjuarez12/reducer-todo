// Setup action global vars
export const ADD_TASK = "ADD_TASK";
export const MARK_COMPLETE = "MARK_COMPLETE";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const TOGGLE_EDITING = "TOGLE_EDITING";

export const initialItemState = {
  todo: [
    {
      name: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        name: action.payload,
        completed: false,
        id: Date.now(),
      };

      return {
        ...state,
        todo: [...state.todo, newTask],
      };

    case MARK_COMPLETE:
      const completedTask = state.todo.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }

        return item;
      });

      return {
        ...state,
        todo: completedTask,
      };

    case CLEAR_COMPLETED:
      const clearCompleted = state.todo.filter(
        (item) => item.completed === false
      );

      return {
        ...state,
        todo: clearCompleted,
      };
    default:
      return state;
  }
};
