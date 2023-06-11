import React, { useState } from 'react';
import { MenuItem, FormControl, Select, IconButton } from '@mui/material';
import DownIcon from './icons/DownIcon';
import TwoDotsIcon from './icons/TwoDotsIcon';
import styled from '@emotion/styled';

const ConditionalWrapper = ({ condition, wrapper, children }) => 
  condition ? wrapper(children) : children;

const SDownIcon = styled(DownIcon)`
    margin: 8em;
`;

const DropdownMenu = ({title, items, outline, bold}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <ConditionalWrapper
        condition={outline}
        wrapper={children =><div 
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            border: '1px solid #8395A4', 
            borderRadius: '0.75em', 
            marginLeft: '2em', 
            height: 35, 
          }}
        >{children}</div>}
      >
        <>
          <FormControl sx={{ color: '#727E8A' }}>
          <Select
            value={selectedOption}
            onChange={handleOptionChange}
            displayEmpty
            inputProps={{
                style: {
                  color: '#727E8A',
                  borderColor: '#727E8A',
                  '&:focus': {
                    borderColor: '#727E8A',
                  },
                },
              }}
            sx={{
                '& .MuiOutlinedInput-input': {
                    color: (bold&&'#fff') || '#8395A4',
                    fontSize: '12px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'transparent',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'transparent',
                  },
                height: '35px',
            }}
            IconComponent={SDownIcon}
          >
            <MenuItem value="">{title}</MenuItem>
            {items.map(item => <MenuItem value={item.value} key={item.value}>{item.title}</MenuItem>)}
          </Select>
        </FormControl>
        {outline && (<IconButton
          onClick={handleClick}
          style={{ 
              border: '1px solid transparent',
              borderTopLeftRadius: '0',
              borderBottomLeftRadius: '0',
              borderTopRightRadius: '0.58em',
              borderBottomRightRadius: '0.58em',
              boxShadow: '0 0 0 1px #8395A4',
              height: 35,
          }}
          aria-controls="dropdown-menu"
          aria-haspopup="true"
        >
          <TwoDotsIcon />
        </IconButton>)}
        </>
      </ConditionalWrapper>
    </>
  );
};

export default DropdownMenu;
