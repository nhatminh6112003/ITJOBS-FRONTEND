import React, { Fragment, useEffect } from 'react';
import Table from '~/Core/components/common/Table/Table';
import { useGetAllCompanyQuery, useDeleteCompanyMutation } from '~/App/providers/apis/companyApi';
import { useMemo } from 'react';
import useServerPagination from '~/App/hooks/useServerPagination';
import { useSearchParams } from 'react-router-dom';
import { DeleteIcon, IconButton, EditIcon } from '~/Core/resources';
import Tooltip from '@mui/material/Tooltip';
import UpdateModal from './components/UpdateModal';
import useModal from '~/App/hooks/useModal';
import { useState } from 'react';
import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
import { toast } from 'react-toastify';
import Card from '~/Core/components/common/Card';
import { CompanyTypeArray } from '~/App/constants/companyEnum';

const Company = () => {
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
	const { data, isFetching } = useGetAllCompanyQuery(
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

	const [deleteMutation] = useDeleteCompanyMutation();
	const tableData = useMemo(() => data?.data ?? [], [data]);

	const columns = useMemo(() => [
		{
			Header: 'STT',
			accessor: 'index',
			isSort: true,
			sortable: true,
			canSort: true,
			Cell: ({ row }) => +data?.pagination?.itemsPerPage * (data?.pagination?.pageIndex - 1) + Number(row.index) + 1
		},
		{ Header: 'Tên công ty', accessor: 'company_name' },
		{
			Header: 'Loại hình công ty',
			accessor: 'company_type',
			Cell: ({ row: { values } }) => {
				const companyType = CompanyTypeArray.find((item) => item.value === values?.company_type);
				return companyType ? companyType.label : '';
			}
		},
		{
			Header: 'Quy mô công ty',
			accessor: 'company_size'
		},
		{ Header: 'Mã số thuế', accessor: 'tax_code' },
		{ Header: 'Địa chỉ', accessor: 'address' },
		{ Header: 'Tên Người Liên Hệ', accessor: 'contact_name' },
		{ Header: 'Số điện thoại người liên hệ', accessor: 'contact_phone' },
		{ Header: 'Chức danh', accessor: 'position' },
		{
			Header: 'Thao tác',
			accessor: 'id',
			Cell: ({ value }) => (
				<div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
					<Tooltip title='Update'>
						<EditIcon
							onClick={() => {
								toggle('update');
								const findCate = Array.isArray(tableData) && tableData?.find((item) => item?.id === value);
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
	]);

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
				header={'Quản lý công ty'}
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
			<UpdateModal isOpen={isShowing.update} onRequestClose={() => toggle('update')} dataUpdate={dataUpdate} />
			<ConfirmDialog
				open={modalConfirmState.open}
				onConfirm={() => handleConfirmDelete(modalConfirmState.payload)}
				onCancel={() => setModalConfirmState({ open: false, payload: null })}
			/>
		</Fragment>
	);
};

export default Company;
