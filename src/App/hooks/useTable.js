// utils
import { useState } from 'react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
export const FilterOrderByEnum = {
	DESC: 'desc',
	ASC: 'asc'
};

const defaultRequest = {
	Keyword: '',
	Orderby: FilterOrderByEnum.DESC,
	PageIndex: 1,
	PageSize: 10
};

const useTable = (props) => {
	const { columns, initRequest = defaultRequest, useRTKQuery } = props;
	const [sorting, setSorting] = useState([]);
	const [request, setRequest] = useState(initRequest);

	// services
	const { data, isError, isFetching, refetch, isLoading } = useRTKQuery(
		{
			body: {
				...request,
				FieldName: sorting?.[0]?.id,
				Orderby: sorting?.[0]?.desc ? FilterOrderByEnum.DESC : FilterOrderByEnum.ASC
			}
		},
		{
			refetchOnMountOrArgChange: true
		}
	);

	// table
	const table = useReactTable({
		data: data?.Result || [],
		columns: columns,
		state: {
			sorting
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel()
	});

	// handle
	const handleChangePage = (page) => {
		if (page !== request.PageIndex)
			setRequest({
				...request,
				PageIndex: page
			});
	};
	const handleChangePageSize = (size) => {
		if (size !== request.PageSize)
			setRequest({
				...request,
				PageIndex: 1,
				PageSize: size
			});
	};

	return {
		sorting,
		request,
		table,
		setSorting,
		setRequest,
		handleChangePage,
		handleChangePageSize,
		isLoading,
		isFetching,
		isError,
		refetch,
		total: data?.Total,
		pageSize: data?.PageSize,
		pageIndex: data?.PageIndex
	};
};
export default useTable;
