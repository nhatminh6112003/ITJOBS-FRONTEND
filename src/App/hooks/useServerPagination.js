import { useReducer } from 'react';

export const initialState = {
	queryPageIndex: 0,
	queryPageSize: 10,
	totalCount: 0,
	queryPageFilter: '',
	queryPageSortBy: []
};

/**
 * @enum
 */
export const PaginationActionEnums = {
	GO_TO_NEXT_PAGE: 'GO_TO_NEXT_PAGE',
	GO_TO_PREV_PAGE: 'GO_TO_PREV_PAGE',
	GO_TO_FIRST_PAGE: 'GO_TO_FIRST_PAGE',
	GO_TO_LAST_PAGE: 'GO_TO_LAST_PAGE',
	CHANGE_PAGE_SIZE: 'CHANGE_PAGE_SIZE',
	CHANGE_PAGE_INDEX: 'CHANGE_PAGE_INDEX'
};

const paginationInitialState = {
	queryPageIndex: 1,
	queryPageSize: 10,
	totalCount: 0,
	queryPageFilter: '',
	queryPageSortBy: []
};

const paginationReducer = (state, action) => {
	switch (action.type) {
		case PaginationActionEnums.GO_TO_NEXT_PAGE:
			return { ...state, queryPageIndex: state.queryPageIndex + 1 };
		case PaginationActionEnums.GO_TO_PREV_PAGE:
			return { ...state, queryPageIndex: state.queryPageIndex - 1 };
		case PaginationActionEnums.GO_TO_FIRST_PAGE:
			return { ...state, queryPageIndex: 1 };
		case PaginationActionEnums.GO_TO_LAST_PAGE:
			return { ...state, queryPageIndex: action.payload };
		case PaginationActionEnums.CHANGE_PAGE_INDEX:
			return { ...state, queryPageIndex: action.payload };
		case PaginationActionEnums.CHANGE_PAGE_SIZE:
			return { ...state, queryPageSize: action.payload };
	}
};

export default function useServerPagination() {
	const [serverPaginationState, dispatch] = useReducer(paginationReducer, paginationInitialState);
	const paginationState = serverPaginationState ?? paginationInitialState;
	return { paginationState, handlePaginate: dispatch };
}
