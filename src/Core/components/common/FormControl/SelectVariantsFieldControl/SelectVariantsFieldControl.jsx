import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useController } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';
import { Box } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import NativeSelect from '@mui/material/NativeSelect';
export default function SelectVariantsFieldControl(
	{ initialValue = 'Chọn', control, name, label, options, disabled, rules, ...props },
	ref
) {
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
		<FormControl variant='standard' sx={{ minWidth: '100%' }}>
			<Box component='form' sx={{ display: 'flex', flexWrap: 'wrap' }}>
				<FormControl sx={{ my: 1, minWidth: '100%' }}>
					<InputLabel variant='standard' htmlFor='uncontrolled-native'>
						{label}
					</InputLabel>
					<NativeSelect
						defaultValue={30}
						inputProps={{
							name: name,
							value: field.value
						}}
						onChange={(event) => {
							field.onChange(event);
							if (props.onChange) {
								props.onChange(event);
							}
						}}>
						<option value={''} style={{ display: 'none' }}></option>
						{Array.isArray(options) &&
							options.map((option, index) => <option value={option?.value}>{option?.label}</option>)}
					</NativeSelect>
				</FormControl>
			</Box>

			{errors ? <span style={{color:'red'}}>{errors[name]?.message}</span> : ''}

		</FormControl>
	);
}
