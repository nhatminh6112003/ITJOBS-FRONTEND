import { Fragment, useMemo, useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Popover from '@mui/material/Popover';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SearchIcon } from '~/Core/resources';
import useCustomRouter from '~/App/hooks/useCustomRouter';
import 'regenerator-runtime/runtime';
import './search.css';
// Table filter global
const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
	const { pushQuery, query } = useCustomRouter();
	const [value, setValue] = useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		const keyword = value.trim();
		pushQuery({ keyword });
		setGlobalFilter(keyword || '');
	}, 300);

	useEffect(() => {
		if (query.keyword) setValue(query.keyword);
	}, []);

	return (
		<div className='search'>
			<SearchIcon />
			<input
				placeholder={`Tìm kiếm trong bảng ...`}
				className='w-full max-w-sm pl-8'
				type='search'
				value={value || ''}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value.trim());
					onChange(e.target.value);
				}}
			/>
		</div>
	);
};

const InputColumnFilter = ({ column: { filterable, filterValue, preFilteredRows, setFilter } }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<Fragment>
			<Button aria-describedby={id} variant='contained' onClick={handleClick} startIcon={<FilterAltIcon />}></Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}>
				{/* <Button variant={open ? 'primary' : 'ghost'} shape='square' size='xs'>
							<FilterAltIcon />
						</Button> */}
				<TextField id='filled-search' label='Search field' type='search' variant='filled' />
			</Popover>
		</Fragment>
	);
};

export { GlobalFilter, InputColumnFilter };
