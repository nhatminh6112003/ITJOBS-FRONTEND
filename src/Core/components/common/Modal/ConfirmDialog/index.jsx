import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDialog({ open, onOpen, onConfirm, onCancel }) {
 

  return (
    <div>
    
      <Dialog
        open={open}
        onClose={onCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Vui lòng thao tác đầy đủ để hoàn thành</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
			     Bạn có chắc chắn muốn thực hiện hành động này?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} variant="outlined" color="error">
            Hủy
          </Button>
          <Button  onClick={onConfirm} variant="contained" color="primary">
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
