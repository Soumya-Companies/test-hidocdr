import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

function SubPages() {
  const {page} = useParams()
  return (
    <Stack
      sx={{
        
        width: "100%",
        height: "300px",
      }}
spacing={2}
      direction= "column"
        alignItems= "center"
        justifyContent= "center"
    >
      <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
        {page}
      </Typography>
      <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
        Page is under Construction
      </Typography>
      <Button component={Link} to="/" variant="contained">
        Go to Home Page
      </Button>
    </Stack>
  );
}

export default SubPages
