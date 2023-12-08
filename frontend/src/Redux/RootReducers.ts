import { combineReducers } from 'redux';
import reducers from './Reducers/AuthReducer';
const rootReducer = combineReducers({
 auth :reducers
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;