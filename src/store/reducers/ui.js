import { TOGGLE_DRAWER } from '../actions/types';

const initialState = {
  drawerIsOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerIsOpen: !state.drawerIsOpen,
      };

    default:
      return state;
  }
};

// Selectors
export const selectDraweIsOpen = state => state.drawerIsOpen;
