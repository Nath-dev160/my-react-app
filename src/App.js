import React from 'react';
import { Button, Typography, Container } from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to MUI!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
}

export default App;
