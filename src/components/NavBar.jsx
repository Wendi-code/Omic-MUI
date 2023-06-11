import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Grid, Typography, } from '@mui/material';
import { Box } from '@mui/system';
import DropdownMenu from './DropdownMenu';
import CommitIcon from './icons/CommitIcon';
import DockIcon from './icons/DockIcon';

const NavBar = () => {
  return (
    <Box sx={{ margin: 0, backgroundColor: '#24303C' }}>
        <AppBar position="static" elevation={0} sx={{backgroundColor: '#24303C'}}>
          <Toolbar>
            <Grid container justifyContent="space-between">
              <Grid item>
                {/* First Group */}
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <DropdownMenu 
                      title ="Project name" 
                      items={[
                        {title: 'Project 1', value: 'project_1'},
                        {title: 'Project 2', value: 'project_2'},
                        {title: 'Project 3', value: 'project_3'}
                      ]}
                    />
                    <DropdownMenu 
                      outline={true}
                      title ="Environment"
                      value="dev" 
                      items={[
                        {title: 'Development', value: 'dev'},
                        {title: 'Production', value: 'prod'},
                        {title: 'Testing', value: 'test'}
                      ]}
                    />
                    {/* <DropDown /> */}
                    <Button variant="contained" disableElevation sx={{marginLeft: '1em',textTransform: 'none', backgroundColor: '#547CD7', color: '#ffffff' }} >
                            <CommitIcon/>
                            <Typography sx={{marginLeft: '1em'}}>Commit (2 files)</Typography>
                    </Button>
                </div>
              </Grid>
              <Grid item>
                {/* Second Group */}
                <IconButton color="inherit">
                  <DockIcon type="left"/>
                </IconButton>
                <IconButton color="inherit">
                  <DockIcon type="bottom"/>
                </IconButton>
                <IconButton color="inherit">
                  <DockIcon type="right"/>
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    </Box>
  );
};

export default NavBar;
