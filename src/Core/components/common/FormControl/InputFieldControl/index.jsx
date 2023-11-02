import { useController } from 'react-hook-form';
import styles from './InputFieldControl.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { v4 as uuidv4 } from 'uuid';

import { useRef, forwardRef, Fragment } from 'react';
const InputFieldControl = (
	{ defaultValue, control, disabled, rules, type = 'text', name, label, id, ...props },
	ref
) => {
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
		<Fragment>
			{label && <label htmlFor={field.name}>{label}</label>}
			<input
				type={type}
				name={field.name}
				id={uuidv4()}
				onChange={field.onChange}
				onBlur={field.onBlur}
				defaultValue={defaultValue}
				value={field.value || ''}
				disabled={disabled}
				ref={(e) => {
					field.ref(e);
					inputRef.current = e;
				}}
				{...props}
			/>
			{errors ? (
				<span
					className={`error_${name}`}
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
export default forwardRef(InputFieldControl);
