import { useController } from 'react-hook-form';
import styles from './InputFieldControl.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { v4 as uuidv4 } from 'uuid';

import { useRef, forwardRef } from 'react';
const InputFieldControl = ({ control, disabled, rules, type = 'text', name, label, ...props }, ref) => {
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

	const localRef = useRef(null);
	const inputRef = ref || localRef;
	return (
		<div className={cx('form-group', 'form-text')}>
			{label && <label htmlFor={field.name}>{label}</label>}
			<input
				type={type}
				name={field.name}
				id={uuidv4()}
				onChange={field.onChange}
				onBlur={field.onBlur}
				value={field.value || ''}
				disabled={disabled}
				ref={(e) => {
					field.ref(e);
					inputRef.current = e;
				}}
				{...props}
			/>
			{errors ? <span className={`error_${name}`}>{errors[name]?.message}</span> : ''}
		</div>
	);
};
export default forwardRef(InputFieldControl);
