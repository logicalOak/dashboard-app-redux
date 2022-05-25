import { JobPosition } from './JobPosition';
import { useDispatch } from 'react-redux';

import { usePosition } from 'features/positions/use-positions';
import { useFetchPositions } from 'features/positions/use-fetch-positions';
import { addFilter } from 'features/filter/filterSlice';
const JobList = () => {
	usePosition();
	useFetchPositions();
	const positions = usePosition();
	const dispatch = useDispatch();

	const handleAddFilter = (filter) => {
		dispatch(addFilter(filter));
	};
	return (
		<div className='job-list'>
			{positions.map((item) => (
				<JobPosition
					key={item.id}
					{...item}
					handleAddFilter={handleAddFilter}
				/>
			))}
		</div>
	);
};

export { JobList };
