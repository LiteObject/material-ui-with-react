import React from 'react';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

export default function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.liteobject.com/">
          LiteObject
        </Link>{' '}
        { new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}