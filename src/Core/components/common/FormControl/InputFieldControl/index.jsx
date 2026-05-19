import { useController } from 'react-hook-form';
import styles from './InputFieldControl.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import { useRef, forwardRef, Fragment } from 'react';
const InputFieldControl = (
	{ defaultValue, control, disabled, rules, type = 'text', name, label, id, ...props },
	ref
) => {
	const {
		field,
		fieldState: { error },
		formState: { errors }
	} = useController({
		name,
		control,
		rules,
		defaultValue: type === 'radio' ? undefined : (defaultValue || props.value)
	});

	const localRef = useRef(null);
	const inputRef = ref || localRef;

	const isRadio = type === 'radio';
	const inputId = id || (isRadio ? `${name}_${props.value}` : name);

	return (
		<Fragment>
			{label && (
				<label htmlFor={inputId} style={isRadio ? { cursor: 'pointer' } : {}}>
					{label}
				</label>
			)}
			<input
				type={type}
				name={field.name}
				id={inputId}
				onChange={(e) => {
					field.onChange(e);
					if (props.onChange) {
						props.onChange(e);
					}
				}}
				onBlur={field.onBlur}
				defaultValue={isRadio ? undefined : defaultValue}
				value={isRadio ? props.value : (field.value ?? '')}
				checked={isRadio ? field.value == props.value : undefined}
				disabled={disabled}
				ref={(e) => {
					field.ref(e);
					inputRef.current = e;
				}}
				{...props}
			/>
			{error ? (
				<span
					className={`error_${name}`}
					style={{
						paddingTop: 7,
						color: 'red',
						fontSize: 12,
						fontStyle: 'italic',
						fontWeight: 500,
						display: 'block'
					}}>
					{error.message}
				</span>
			) : (
				''
			)}
		</Fragment>
	);
};
export default forwardRef(InputFieldControl);

