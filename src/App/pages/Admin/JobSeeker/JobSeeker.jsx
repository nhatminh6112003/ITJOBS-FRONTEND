import Card from '~/Core/components/common/Card';
import Table from '~/Core/components/common/Table/Table';
import React from 'react';
import { Fragment } from 'react';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import UserRoleEnum from '~/App/constants/roleEnum';
import useServerPagination from '~/App/hooks/useServerPagination';
import { useGetAllQuery } from '~/App/providers/apis/userApi';

const JobSeeker = () => {
	const { paginationState, handlePaginate } = useServerPagination();
	const [searchParams] = useSearchParams();
	const keyword = searchParams.get('keyword') || paginationState.queryPageFilter;
	const pageSize = searchParams.get('pageSize') || paginationState.queryPageSize;
	const page = searchParams.get('page') || paginationState.queryPageIndex;
	const { data, isFetching } = useGetAllQuery(
		{
			params: {
				keyword,
				limit: pageSize,
				page,
				user_type_id: UserRoleEnum.JOBSEEKER
			}
		},
		{
			refetchOnMountOrArgChange: true
		}
	);

	const tableData = useMemo(() => data?.data ?? [], [data]);
	const columns = useMemo(
		() => [
			{
				Header: 'STT',
				accessor: 'index',
				isSort: true,
				sortable: true,
				canSort: true,
				Cell: ({ row }) => data?.pagination.itemsPerPage * (data?.pagination.pageIndex - 1) + Number(row.index) + 1
			},
			{ Header: 'Tên', accessor: 'lastname' },
			{ Header: 'Họ', accessor: 'firstname' },
			{ Header: 'Email', accessor: 'email' }
		],
		[data?.pagination.itemsPerPage, data?.pagination.pageIndex]
	);
	return (
		<Fragment>
			<Card
				header={'Danh sách ứng viên'}
				body={
					<Table
						pageCount={data?.pagination?.totalPages}
						loading={isFetching}
						columns={columns}
						data={tableData || []}
						onServerPaginate={handlePaginate}
						serverPaginationProps={data?.pagination}
					/>
				}
			/>
		</Fragment>
	);
};

export default JobSeeker;
