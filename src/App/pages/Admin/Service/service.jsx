import { Tooltip } from '@mui/material';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useModal from '~/App/hooks/useModal';
import useServerPagination from '~/App/hooks/useServerPagination';
import { useGetAllServiceQuery, useDeleteServiceMutation } from '~/App/providers/apis/serviceApi';
import Card from '~/Core/components/common/Card';
import { Button } from '@mui/material';
import { AddIcon, DeleteIcon, EditIcon } from '~/Core/resources';
import Table from '~/Core/components/common/Table/Table';
import UpdateModal from './components/updateModal';
import CreateModal from './components/createModal';
import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
import { useGetAllBenefitsQuery } from '~/App/providers/apis/benefits';
import formatVND from '~/Core/utils/formatVND';
const Service = () => {
	const [dataUpdate, setDataUpdate] = useState(null);
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });
	const { isShowing, toggle } = useModal({
		update: false,
		create: false
	});
	const { paginationState, handlePaginate } = useServerPagination();
	const [searchParams] = useSearchParams();
	const keyword = searchParams.get('keyword') || paginationState.queryPageFilter;
	const pageSize = searchParams.get('pageSize') || paginationState.queryPageSize;
	const page = searchParams.get('page') || paginationState.queryPageIndex;
	const { data, isFetching } = useGetAllServiceQuery(
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
	const { data: listBenefits } = useGetAllBenefitsQuery();
	const [deleteMutation] = useDeleteServiceMutation();
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
			{ Header: 'Tên dịch vụ', accessor: 'name' },
			{
				Header: 'Loại hình dịch vụ',
				accessor: 'service_type',
				Cell: ({ row: { values } }) => {
					if (values?.service_type) return values?.service_type?.name;
					return '';
				}
			},
			{
				Header: 'Giá dịch vụ',
				accessor: 'price',
				Cell: ({ row: { values } }) => {
					console.log('TCL: values', values);

					return values?.price ? `${formatVND(values?.price.toString())} VNĐ` : '';
				}
			},
			{
				Header: 'Thao tác',
				accessor: 'id',
				Cell: ({ value }) => (
					<div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
						<Tooltip title='Update'>
							<EditIcon
								onClick={() => {
									toggle('update');
									const findCate = Array.isArray(tableData) && tableData?.find((item) => item?.id === value);
									console.log('TCL: findCate', findCate);
									setDataUpdate(findCate);
								}}
								style={{ cursor: 'pointer' }}
								fontSize={'small'}
							/>
						</Tooltip>
						<Tooltip title='Delete'>
							<DeleteIcon
								onClick={() => setModalConfirmState({ open: true, payload: value })}
								style={{ cursor: 'pointer' }}
								fontSize={'small'}
							/>
						</Tooltip>
					</div>
				)
			}
		],
		[data?.pagination.itemsPerPage, data?.pagination.pageIndex, tableData, toggle]
	);
	const handleConfirmDelete = async (id) => {
		deleteMutation(id)
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
				}
			})
			.catch((err) => {
				toast.error(err?.data?.message);
			});
		setModalConfirmState({ open: false, payload: null });
	};

	return (
		<Fragment>
			<Card
				header={'Quản lý dịch vụ'}
				toolbar={
					<Button onClick={() => toggle('create')} color='info' variant='contained' startIcon={<AddIcon />}>
						Thêm mới
					</Button>
				}
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
			<UpdateModal
				isOpen={isShowing.update}
				onRequestClose={() => toggle('update')}
				dataUpdate={dataUpdate}
				listBenefits={listBenefits}
			/>
			<CreateModal isOpen={isShowing.create} onRequestClose={() => toggle('create')} listBenefits={listBenefits} />
			<ConfirmDialog
				open={modalConfirmState.open}
				onConfirm={() => handleConfirmDelete(modalConfirmState.payload)}
				onCancel={() => setModalConfirmState({ open: false, payload: null })}
			/>
		</Fragment>
	);
};

export default Service;
