'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, MenuItem, OutlinedInput } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function SearchAppBar() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const router = useRouter();

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  }

  const onSearchEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      router.push(`/?q=${searchQuery}`);
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href='/'>
            <MenuItem key={'HOME'}>
              <Typography sx={{ textAlign: 'center' }}>HOME</Typography>
            </MenuItem>
          </Link>
          <Link href='/favorite'>
            <MenuItem key={'FAVORITE'}>
              <Typography sx={{ textAlign: 'center' }}>FAVORITE</Typography>
            </MenuItem>
          </Link>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
            label="Amount"
            onChange={onSearchChange}
            onKeyDown={onSearchEnter}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
