import { combineReducers } from 'redux';
import ui, * as fromUi from './ui';

const rootReducer = combineReducers({
  ui,
});

export default rootReducer;

// Selectors
export const selectDrawerIsOpen = state => fromUi.selectDraweIsOpen(state.ui);
