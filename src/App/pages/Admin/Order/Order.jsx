import React, { Fragment, useEffect } from 'react';
import Table from '~/Core/components/common/Table/Table';
import { useMemo } from 'react';
import useServerPagination from '~/App/hooks/useServerPagination';
import { useSearchParams } from 'react-router-dom';
import Card from '~/Core/components/common/Card';
import { useGetAllOrderQuery } from '~/App/providers/apis/orderApi';
import formatVND from '~/Core/utils/formatVND';
import moment from 'moment';
const Order = () => {
	const { paginationState, handlePaginate } = useServerPagination();
	const [searchParams] = useSearchParams();
	const keyword = searchParams.get('keyword') || paginationState.queryPageFilter;
	const pageSize = searchParams.get('pageSize') || paginationState.queryPageSize;
	const page = searchParams.get('page') || paginationState.queryPageIndex;

	const { data, isFetching } = useGetAllOrderQuery(
		{
			params: {
				keyword,
				limit: pageSize,
				page
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
				Cell: ({ row }) =>
					+data?.pagination?.itemsPerPage * (data?.pagination?.pageIndex - 1) + Number(row.index) + 1
			},
			{
				Header: 'Tên công ty',
				accessor: 'company',
				Cell: ({ row: { values } }) => {
					return values?.company?.company_name;
				}
			},
			{
				Header: 'Tổng tiền',
				accessor: 'total',
				Cell: ({ row: { values } }) => {
					return values?.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
				}
			},
			{
				Header: 'Ngày đặt hàng',
				accessor: 'createdAt',
				Cell: ({ row: { values } }) => {
					return moment(values?.createdAt).format('DD-MM-YYYY');
				}
			},
			{
				Header: 'Trạng thái',
				accessor: 'status',
				Cell: ({ row: { values } }) => {
					if (values.status === 'SUCCESS') {
						return 'Thành công';
					} else {
						return 'Thất bại';
					}
				}
			}
		],
		[data?.pagination?.itemsPerPage, data?.pagination?.pageIndex]
	);

	return (
		<Fragment>
			<Card
				header={'Quản lý đơn hàng'}
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

export default Order;
