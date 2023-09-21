import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm, Controller, useController } from 'react-hook-form';
import './ValidationTextFieldsControl.css';
import { useRef, forwardRef } from 'react';

export default function ValidationTextFieldsControl({ rules,label, control,...props }) {
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

	return (
		<Box
			component='form'
			sx={{
				'& fieldset': {
					border: 'none',
					outlineColor: 'transparent'
				},
				'& .MuiTextField-root': { m: 1, width: '100%', height: '' }
			}}
			disableUnderline
			noValidate
			autoComplete='off'>
			<div>
				<TextField
					name={field.name}
					onChange={field.onChange}
					onBlur={field.onBlur}
					value={field.value || ''}
					control={control}
					{...errors[name]?.message && error}
					label={label}
					variant='standard'
					helperText={errors[name]?.message}
				/>
			</div>
		</Box>
	);
}
