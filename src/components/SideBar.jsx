import { List, ListItem, ListItemIcon, IconButton, Grid, Box, Avatar } from '@mui/material';
import RightIcon from './icons/RightIcon';
import DataBaseIcon from './icons/DataBaseIcon';
import NotePadIcon from './icons/NotePadIcon';
import HistoryIcon from './icons/HistoryIcon';
import TriCircleIcon from './icons/TriCircleIcon';
import SearchIcon from './icons/SearchIcon';
import EyeIcon from './icons/EyeIcon';
import OmicLogo from './icons/OmicLogo';
import PlayIcon from './icons/PlayIcon';
import { color } from '@mui/system';
import AdjustIcon from './icons/AdjustIcon';

function SideBar() {
  return (
        <Box sx={{ display: 'flex', width: '60px', height: '100%', backgroundColor: '#f0f0f0' }}>
          <Grid item sx={{backgroundColor: '#000', maxWidth: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', py: '1em', px: '1em'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          
              {/* First element at the top */}
              <div>
                <List sx={{ padding: 0, margin: 0, }}>
                  <ListItem sx={{ padding: 0, marginBottom: '2em' }}>
                    <ListItemIcon sx={{ width: '16px',padding: 0, margin: 0 }}>
                      <IconButton sx={{ padding: 0, margin: 0 }}>
                        <OmicLogo />
                      </IconButton>
                    </ListItemIcon>
                  </ListItem>
                </List>
              </div>
              {/* First element at the top */}
              {/* Second element at the top */}
              <div>
                <List sx={{ padding: 0, margin: 0, }}>
                    <ListItem sx={{ padding: 0,  }}>
                      <ListItemIcon sx={{ width: '16px',padding: 0, margin: 0 }}>
                        <IconButton sx={{ padding: 0, margin: 0 }}>
                          <PlayIcon />
                        </IconButton>
                      </ListItemIcon>
                    </ListItem>
                </List>
              </div>
              {/* Second element at the top */}
              <hr style={{width: '75%', opacity: '25%', marginBlock: '1em'}}/>
              {/* Group of 2 buttons in the top middle */}
              <div>
                  <List sx={{ padding: 0, margin: 0, }}>
                    <ListItem sx={{ padding: 0, marginBottom: '2em' }}>
                      <ListItemIcon sx={{ width: '16px',padding: 0, margin: 0 }}>
                        <IconButton sx={{ padding: 0, margin: 0 }}>
                          <EyeIcon />
                        </IconButton>
                      </ListItemIcon>
                    </ListItem>
                    <ListItem sx={{ padding: 0, }}>
                      <ListItemIcon sx={{ width: '16px',padding: 0, margin: 0 }}>
                        <IconButton sx={{ padding: 0, margin: 0 }}>
                          <SearchIcon />
                        </IconButton>
                      </ListItemIcon>
                    </ListItem>
                  </List>
              </div>
              {/* Group of 2 buttons in the top middle */}
                <hr style={{width: '75%', opacity: '25%', marginBlock: '1em'}}/>
                {/* 4 Icons in the middle */}
                <div>
                  <List sx={{ padding: 0, margin: 0, }}>
                    <ListItem sx={{ padding: 0, marginBottom: '2em' }}>
                      <ListItemIcon sx={{ width: '16px',padding: 0, margin: 0 }}>
                        <IconButton sx={{ padding: 0, margin: 0 }}>
                          <TriCircleIcon />
                        </IconButton>
                      </ListItemIcon>
                    </ListItem>
                    <ListItem sx={{ padding: 0, marginBottom: '2em' }}>
                      <ListItemIcon sx={{ width: '16px',padding: 0, margin: 0 }}>
                        <IconButton sx={{ padding: 0, margin: 0 }}>
                          <HistoryIcon />
                        </IconButton>
                      </ListItemIcon>
                    </ListItem>
                    <ListItem sx={{ padding: 0, marginBottom: '2em' }}>
                      <ListItemIcon sx={{ width: '16px',padding: 0, margin: 0 }}>
                        <IconButton sx={{ padding: 0, margin: 0 }}>
                          <NotePadIcon />
                        </IconButton>
                      </ListItemIcon>
                    </ListItem>
                    <ListItem sx={{ padding: 0, }}>
                      <ListItemIcon sx={{ width: '16px',padding: 0, margin: 0 }}>
                        <IconButton sx={{ padding: 0, margin: 0 }}>
                          <DataBaseIcon/>
                        </IconButton>
                      </ListItemIcon>
                    </ListItem>
                  </List>
                </div>
                {/* 4 Icons in the middle */}
              <hr style={{width: '75%', opacity: '25%', marginBlock: '1em'}}/>
              {/* Chevron right */}
              <div>
                <List sx={{ padding: 0, margin: 0, }}>
                  <ListItem sx={{ padding: 0, marginBottom: '2em' }}>
                    <ListItemIcon sx={{ width: '16px',padding: 0, margin: 0 }}>
                      <IconButton sx={{ padding: 0, margin: 0 }}>
                        <RightIcon />
                      </IconButton>
                    </ListItemIcon>
                  </ListItem>
                </List>
              </div>
              {/* Chevron right */}
            </div>
            {/* Last two buttons at the bottom */}
            <div>
              <List sx={{ padding: 0, margin: 0, }}>
                  <ListItem sx={{ padding: 0, marginBottom: '2em' }}>
                    <ListItemIcon sx={{ width: '16px',padding: 0, margin: 0 }}>
                      <IconButton sx={{ padding: 0, margin: 0 }}>
                        <AdjustIcon />
                      </IconButton>
                    </ListItemIcon>
                  </ListItem>
                  <ListItem sx={{ padding: 0, my: 0 }}>
                    <ListItemIcon sx={{ width: '16px',padding: 0, margin: 0 }}>
                      <IconButton sx={{ padding: 0, margin: 0 }}>
                        <Avatar sx={{width: '1.5em', height: '1.5em', transform: 'translateX(-12.5%)'}} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Avatar" />
                      </IconButton>
                    </ListItemIcon>
                  </ListItem>
              </List>
            </div>
            {/* Last two buttons at the bottom */}
          </Grid>
        </Box>
  );
}



export default SideBar