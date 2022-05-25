import { filterReducer } from 'features/filter/filterSlice';
import { positionsReducer } from 'features/positions/positionsSlice';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
	reducer: {
		filters: filterReducer,
		positions: positionsReducer,
	},
	devTools: true,
});
