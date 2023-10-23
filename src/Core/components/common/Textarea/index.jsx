import * as React from 'react';
import { TextareaAutosize } from '@mui/material';

import { styled } from '@mui/system';

export default function Textarea({ ...props }) {
	const blue = {
		100: '#DAECFF',
		200: '#b6daff',
		400: '#3399FF',
		500: '#007FFF',
		600: '#0072E5',
		900: '#003A75'
	};

	const grey = {
		50: '#f6f8fa',
		100: '#eaeef2',
		200: '#d0d7de',
		300: '#afb8c1',
		400: '#8c959f',
		500: '#6e7781',
		600: '#57606a',
		700: '#424a53',
		800: '#32383f',
		900: '#24292f'
	};

	const StyledTextarea = styled(TextareaAutosize)(
		({ theme }) => `
    width: 320px;
    fontfamily: IBM Plex Sans, sansserif;
    fontsize: 0.875rem;
    fontweight: 400;
    lineheight: 1.5;
    padding: 12px;
    borderradius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    boxshadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      bordercolor: ${blue[400]};
    }

    &:focus {
      bordercolor: ${blue[400]};
      boxshadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focusvisible {
      outline: 0;
    }
  `
	);

	return <StyledTextarea {...props} />;
}
