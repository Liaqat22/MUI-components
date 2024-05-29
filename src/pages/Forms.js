import React, { useState } from 'react';
import { TextField, Button,  Typography, Container, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    company: '',
    jobTitle: '',
    department: '',
    startDate: '',
    role: '', // Select options field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container-fluid">
      <div className='row'>

      <Container maxWidth="lg">
        
          <Typography variant="h4" component="h1" gutterBottom className='text-center'>
            Application Form
          </Typography>
          <form onSubmit={handleSubmit} className='p-3 bg-light' >
            <Grid container spacing={1.5}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Start Date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Role</InputLabel>
                  <Select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="developer">Developer</MenuItem>
                    <MenuItem value="designer">Designer</MenuItem>
                    <MenuItem value="manager">Manager</MenuItem>
                    <MenuItem value="qa">QA</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
      </Container>
      </div>

    </div>
  );
};

export default Forms;
