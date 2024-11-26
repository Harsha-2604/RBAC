import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Paper,
} from '@mui/material';

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState(['Read', 'Write', 'Delete']);
  const [open, setOpen] = useState(false);
  const [currentPermission, setCurrentPermission] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleOpen = (permission = '', index = null) => {
    setCurrentPermission(permission);
    setEditingIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentPermission('');
    setEditingIndex(null);
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      setPermissions(permissions.map((perm, index) => (index === editingIndex ? currentPermission : perm)));
    } else {
      setPermissions([...permissions, currentPermission]);
    }
    handleClose();
  };

  const handleDelete = (index) => {
    setPermissions(permissions.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Button variant="contained" onClick={() => handleOpen()}>
        Add Permission
      </Button>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Permission</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {permissions.map((permission, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{permission}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(permission, index)}>Edit</Button>
                  <Button color="error" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Add/Edit Permission */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingIndex !== null ? 'Edit Permission' : 'Add Permission'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Permission Name"
            value={currentPermission}
            onChange={(e) => setCurrentPermission(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PermissionManagement;
