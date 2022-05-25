import { useSelector } from 'react-redux';
import { selectVisiblePositions } from './positionsSlice';

import { selectFilters } from 'features/filter/filterSlice';

export const usePosition = () => {
	const currentFilters = useSelector(selectFilters);
	const positions = useSelector((state) =>
		selectVisiblePositions(state, currentFilters)
	);

	return positions;
};
