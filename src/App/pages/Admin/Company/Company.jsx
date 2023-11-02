import React, { Fragment, useEffect } from 'react';
import Table from '~/Core/components/common/Table/Table';
import {
	useGetAllCompanyQuery,
	useUpdateCompanyMutation,
	useDeleteCompanyMutation
} from '~/App/providers/apis/companyApi';
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
import { AddIcon } from '~/Core/resources';
import { Button } from '@mui/material';

const Company = () => {
	const [dataUpdate, setDataUpdate] = useState(null);
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });
	const { isShowing, toggle } = useModal({
		update: false,
		create: false
	});

	const { data, isFetching } = useGetAllCompanyQuery();

	const [deleteMutation] = useDeleteCompanyMutation();
	const tableData = useMemo(() => data?.data ?? [], [data]);

	const columns = useMemo(() => [
		{
			Header: 'STT',
			accessor: 'index',
			isSort: true,
			sortable: true,
			canSort: true
		},
		{ Header: 'Tên công ty', accessor: 'company_name' },
		{ Header: 'Quy mô công ty', accessor: 'company_size' },
		{ Header: 'Địa chỉ website', accessor: 'company_website_url' },
		{ Header: 'Mã số thuế', accessor: 'tax_code' },
		{ Header: 'Địa chỉ', accessor: 'address' },
		{ Header: 'Tên Người Liên Hệ', accessor: 'contact_name' },
		{ Header: 'Số điện thoại người liên hệ', accessor: 'contact_phone' },
		{ Header: 'Vị Trí', accessor: 'position' },

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
			});
		setModalConfirmState({ open: false, payload: null });
	};

	return (
		<Fragment>
			<Card
				header={'Quản lý công ty'}
				body={
					<Table
						loading={isFetching}
						columns={columns}
						data={tableData || []}
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
