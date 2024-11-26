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

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ]);
  const [open, setOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState({ name: '', permissions: '' });
  const [editing, setEditing] = useState(false);

  const handleOpen = (role = { name: '', permissions: '' }) => {
    setCurrentRole(role);
    setEditing(!!role.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentRole({ name: '', permissions: '' });
  };

  const handleSave = () => {
    const updatedPermissions = currentRole.permissions.split(',').map((perm) => perm.trim());
    if (editing) {
      setRoles(roles.map((r) => (r.id === currentRole.id ? { ...currentRole, permissions: updatedPermissions } : r)));
    } else {
      setRoles([...roles, { ...currentRole, id: Date.now(), permissions: updatedPermissions }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div>
      <Button variant="contained" onClick={() => handleOpen()}>
        Add Role
      </Button>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Permissions</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.id}</TableCell>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.permissions.join(', ')}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(role)}>Edit</Button>
                  <Button color="error" onClick={() => handleDelete(role.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Add/Edit Role */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editing ? 'Edit Role' : 'Add Role'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Role Name"
            value={currentRole.name}
            onChange={(e) => setCurrentRole({ ...currentRole, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Permissions (comma-separated)"
            value={currentRole.permissions}
            onChange={(e) => setCurrentRole({ ...currentRole, permissions: e.target.value })}
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

export default RoleManagement;
