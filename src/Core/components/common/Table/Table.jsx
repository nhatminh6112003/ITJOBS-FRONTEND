import { matchSorter } from 'match-sorter';
import { Fragment, useMemo } from 'react';
import { useFilters, useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from 'react-table';
import { PaginationActionEnums } from '~/App/hooks/useServerPagination';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SortIcon from '@mui/icons-material/Sort';
import classNames from 'classnames/bind';
import Pagination from '../Pagination';
import { GlobalFilter } from './components/ReactTableFilters';
import styles from './table.css';
const cx = classNames.bind(styles);

function fuzzyTextFilterFn(rows, id, filterValue) {
	return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

function Table({
	columns,
	data,
	loading,
	pageCount: controlledPageCount,
	serverPaginationProps,
	onServerPaginate: dispatch
}) {
	const filterTypes = useMemo(
		() => ({
			fuzzyText: fuzzyTextFilterFn,
			text: (rows, id, filterValue) => {
				return rows.filter((row) => {
					const rowValue = row.values[id];
					return rowValue !== undefined
						? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
						: true;
				});
			}
		}),
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		setAllFilters,
		preGlobalFilteredRows,
		setGlobalFilter,
		// Get the state from the instance
		state: { pageIndex, pageSize, globalFilter, filters, selectedRowIds }
	} = useTable(
		{
			columns,
			data,
			manualPagination: true,
			pageCount: controlledPageCount,
			filterTypes
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination,
		useRowSelect
	);
	const isEmptyData = Array.isArray(data) && data.length > 0;

	const hasNextPage = serverPaginationProps
		? serverPaginationProps?.pageIndex < serverPaginationProps?.totalPages
		: canNextPage;

	const hasPreviousPage = serverPaginationProps ? serverPaginationProps?.pageIndex > 1 : canPreviousPage;

	const gotoPreviousPage = () => {
		dispatch({ type: PaginationActionEnums.GO_TO_PREV_PAGE });
	};
	const gotoNextPage = () => {
		dispatch({ type: PaginationActionEnums.GO_TO_NEXT_PAGE });
	};

	const changePageIndex = (value) => {
		if (serverPaginationProps?.pageIndex >= serverPaginationProps?.totalPages) gotoPreviousPage();
		dispatch({
			type: PaginationActionEnums.CHANGE_PAGE_INDEX,
			payload: value
		});
	};
	return (
		<Fragment>
			<GlobalFilter
				preGlobalFilteredRows={preGlobalFilteredRows}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
			/>
			<table {...getTableProps()} className={cx('content-table')}>
				<thead className='responsive-table__head'>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()} className='responsive-table__row'>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps()}
									className='responsive-table__head__title responsive-table__head__title--name'>
									<div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
										{column.render('Header')}
										{column.sortable && column.canSort && (
											<div
												onClick={() => column.toggleSortBy(!column.isSortedDesc)}
												{...column.getHeaderProps()}>
												{column.isSorted ? (
													column.isSortedDesc ? (
														<ArrowDownwardIcon />
													) : (
														<ArrowUpwardIcon />
													)
												) : (
													<SortIcon />
												)}
												{column.filterable && column.render('Filter')}
											</div>
										)}
									</div>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()} className='responsive-table__body'>
					{page.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()} class='responsive-table__row'>
								{row.cells.map((cell) => {
									return (
										<td
											className='responsive-table__body__text responsive-table__body__text--status'
											{...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<Pagination
				total={serverPaginationProps?.totalPages}
				pageSize={serverPaginationProps?.pageSize}
				currentPage={serverPaginationProps?.pageIndex}
				onChange={changePageIndex}
				gotoNextPage={gotoNextPage}
				gotoPreviousPage={gotoPreviousPage}
			/>
		</Fragment>
	);
}

export default Table;
