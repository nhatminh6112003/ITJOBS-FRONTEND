import React, { useState, useRef, useEffect, useMemo, Fragment } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './selectMultiple.module.css';
import { useController } from 'react-hook-form';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SelectMultipleFieldControl = ({
	label,
	options,
	placeholder,
	maxItems,
	control,
	rules,
	name,
	selectedValues,
	...props
}) => {
	const [searchValue, setSearchValue] = useState('');
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Event listener to detect clicks outside of the dropdown
	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Use useEffect to populate selectedOptions when the component mounts
	useEffect(() => {
		// Filter the options to get the selectedOptions based on selectedValues
		if (selectedValues && options) {
			const newSelectedOptions = options?.filter((option) => selectedValues.includes(option.value));
			setSelectedOptions(newSelectedOptions);
		}
	}, [selectedValues, options]);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleOptionClick = (option) => {
		const index = selectedOptions.indexOf(option);

		if (index === -1) {
			setSelectedOptions([...selectedOptions, option]);
		} else {
			const updatedOptions = [...selectedOptions];
			updatedOptions.splice(index, 1);
			setSelectedOptions(updatedOptions);
		}
		// field.onChange(event)
	};

	const handleSelectAllClick = () => {
		if (selectedOptions.length < options.length) {
			setSelectedOptions(options);
		} else {
			setSelectedOptions([]);
		}
	};

	const handleSearchChange = (e) => {
		setSearchValue(e.target.value);
	};

	// Filter options based on the searchValue
	const filteredOptions = useMemo(() => {
		if (!options) {
			return [];
		} else {
			return options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()));
		}
	}, [searchValue, options]);

	const {
		field,
		fieldState: { error },
		formState: { errors, touchedFields }
	} = useController({
		name,
		control,
		rules,
		defaultValue: props.value,
		...props
	});

	useEffect(() => {
		const handleData = selectedOptions.map((item) => item.value);
		field.onChange(handleData);
	}, [selectedOptions]);

	return (
		<Fragment>
			<label htmlFor='' style={{ fontSize: 16, marginBottom: 7, fontWeight: 500 }}>
				{label}
			</label>
			<div className={cx('multiselect-dropdown')} ref={dropdownRef}>
				<div className={cx('multiselect-dropdown-selected')} onClick={toggleDropdown}>
					{selectedOptions.length > 0 ? (
						selectedOptions.length > maxItems ? (
							<span className={cx('optext', 'maxselected')}>{selectedOptions.length} selected</span>
						) : (
							selectedOptions.map((option, index) => (
								<span key={index} className={cx('optext')}>
									{option.label}
									<span
										className={cx('optdel')}
										title={'Remove'}
										onClick={(e) => {
											e.stopPropagation();
											handleOptionClick(option);
										}}>
										🗙
									</span>
								</span>
							))
						)
					) : (
						<span className={cx('placeholder')}>{placeholder}</span>
					)}
				</div>
				{isDropdownOpen && (
					<div className={cx('multiselect-dropdown-list-wrapper')}>
						<input
							className={cx('multiselect-dropdown-search', 'form-control')}
							type='text'
							value={searchValue}
							onChange={handleSearchChange}
							placeholder={'Search'}
						/>
						<div className={cx('multiselect-dropdown-list')}>
							{/* {selectAll && (
								<div className={cx('select-all')} onClick={handleSelectAllClick}>
									<input type='checkbox' checked={selectedOptions.length === options.length} readOnly />
									<label>All</label>
								</div>
							)} */}
							{filteredOptions?.map((option, index) => (
								<div
									className={cx('select-item')}
									key={index}
									onClick={() => handleOptionClick(option)}
									name={name}>
									<input type='checkbox' checked={selectedOptions.includes(option)} readOnly />
									<label>{option.label}</label>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			{errors ? (
				<span
					style={{
						paddingTop: 7,
						color: 'red',
						fontSize: 12,
						fontStyle: 'italic',
						fontWeight: 500
					}}>
					{errors[name]?.message}
				</span>
			) : (
				''
			)}
		</Fragment>
	);
};

export default SelectMultipleFieldControl;
