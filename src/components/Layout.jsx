import React from 'react';
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Box, Button, Chip, Grid, IconButton, Paper, Tab, Tabs, Typography } from '@mui/material';
import TreeView from './TreeView';
import SideBar from './SideBar';
import NavBar from './NavBar';
import QuestionMarkIcon from './icons/QuestionMarkIcon';
import EllipsisIcon from './icons/EllipsisIcon';
import DownIcon from './icons/DownIcon';
import OmicTabs from './OmicTabs';
import DocumentLookIcon from './icons/DocumentLookIcon';
import SchemaIcon from './icons/SchemaIcon';
import RefershIcon from './icons/RefreshIcon';
import CloseIcon from './icons/CloseIcon';
import OmicTable from './OmicTable';
import BottomTreeView from './BottomTreeView';
import styled from '@emotion/styled';

const Layout = () => {
  const [activeTab, setActiveTab] = useState(0);
  const indicatorColor = 'primary';
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const topTabs = [
    {
      label: 'Outline'
    },
    {
      label: 'Documentation'
    },
  ]

  const bottomTabs = [
    {
        icon: <DocumentLookIcon/>,
        iconPosition: 'start',
        label: 'Query results'
    },
    {
        icon: <SchemaIcon/>,
        iconPosition: 'start',
        label: 'Schemas'
    },
  ]

  const STabs = styled(Tabs)`
    .MuiTabs-indicator {
      background-color: #ffffff;
    }
    .MuiTab-root {
      color: #ffffff;
    }
    .Mui-selected {
      color: #ffffff;
    }
    .MuiTabs-flexContainer {
      justify-content: space-between;
    }
  `;
  const STab = styled(Tab)`
    .MuiTab-root {
      color: #ffffff;
    }
  `;

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
    <SideBar />
    <Box sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <Box sx={{ display: 'flex', flex: '1 1 auto', overflow: 'hidden' }}>
        <Box sx={{ flex: '0 0 240px', p: 2, overflow: 'auto', width: '240px', backgroundColor: '#3D4B56' }}>
          <Box sx={{paddingLeft: '1em', marginBottom: '0.5em'}}>
            <Typography color='white' fontWeight='bold' fontSize='1.5em'>Files</Typography>
          </Box>
          <TreeView />
        </Box>
        <Box sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
          <Grid container spacing={0} sx={{ flex: '1 1 50%', backgroundColor: '#2E3A46', height: '50%', maxHeight: '50%'  }}>
            <Grid item xs={8} sx={{backgroundColor:'#2E3A46', height: '100%', maxHeight: '100%' }} >
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#2E3A46'}}>
                <Box sx={{ p: 2, backgroundColor: '#2E3A46', borderBottom: '1px solid #727E8A' }}>
                  <div style={{marginInline: '0.75em',height: '100%',display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography color='white'>defintions/1_simple_examples/dataset_2_with_ref.sql</Typography>
                    <Button variant="contained" disableElevation sx={{marginLeft: '1em',textTransform: 'none', backgroundColor: '#505D6B', color: '#ffffff', borderRadius: '0.75em' }} >
                      <Typography>Save</Typography>
                    </Button>
                  </div>
                </Box>
                <Box sx={{ flex: '1 1 auto', backgroundColor: '#2E3A46', overflow: 'hidden' }}>
                  {/* Editor  */}
                  <Box sx={{maxWidth: '100%', height: '100%', paddingTop:'2em', backgroundColor: '#1E1E1E' }}>
                    <Editor 
                      maxHeight='calc(100% - 2em)'
                      theme="vs-dark" 
                      defaultLanguage='sql' 
                      defaultValue="-- learn more on https://docs.project.co/guides/tables/

--js type('table')

SELECT country        as country,
       device_type    as device_type,
       sum(revenue)   as revenue,
       sum(sessions)  as sessions,
       sum(pageviews) as pageviews
FROM my_table
WHERE country = 'FRANCE'
GROUP BY 1, 2"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{borderLeft: '1px solid #727E8A', height: '100%', maxHeight: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#2E3A46', marginLeft: '1.5em' }}>
                <Box sx={{ maxHeight: '60px',  py: 2.5, backgroundColor: '#2E3A46' }}>
                  <div style={{width: '95%', maxHeight: '100%', borderBottom: '1px solid #727E8A'}}>
                      <STabs value={activeTab} onChange={handleTabChange} indicatorColor={indicatorColor} textColor="inherit" sx={{display: 'flex', justifyContent: 'space-between'}}>
                        {topTabs.map((tab) => (
                          <STab disableRipple icon={tab.icon} iconPosition={tab.iconPosition } label={tab.label} key={tab.label} />
                        ))}
                      </STabs>
                  </div>
                </Box>
                <Box sx={{ maxHeight: 'calc(100% - 60px)', flex: '1 1 auto', overflow: 'auto', backgroundColor: '#2E3A46' }}>
                  <Grid item direction="column" container spacing={0} sx={{ paddingBottom: '2em', height: '100%', overflowY: 'auto'}}>
                    <Grid item container sx={{borderBottom: '1px solid #3A4652', height: 'calc(100% / 3)'}}>
                      <Grid item container sx={{paddingBottom: '0.25em', maxHeight: '45%'}}>
                        <span> <QuestionMarkIcon active/> </span>
                        <Typography color='#D0BD8E' sx={{marginLeft: '0.25em'}}>No Compilation Issue</Typography>
                      </Grid>
                      <Grid item container sx={{paddingBottom: '1em', alignItems: 'center', justifyContent: 'space-between', maxHeight: '45%'}}>
                        <Grid item>
                          <Grid container sx={{alignItems: 'center'}}>
                            <Chip label="table" color='success' sx={{height: '2em'}}/>
                            <Typography mx='1em' color='white'>dataset_2_with_ref</Typography>
                          </Grid>
                        </Grid>
                        <Grid item >
                          <Grid container sx={{alignItems: 'center'}}>
                            <IconButton><EllipsisIcon /></IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item sx={{ borderBottom: '1px solid #3A4652', height: 'calc(100% / 6)' }}>
                      <Grid
                        item
                        container
                        sx={{ marginBottom: '0.25em', alignItems: 'center', justifyContent: 'space-between' }}
                      >
                        <Typography color="#ccc">Dependencies</Typography>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ borderRadius: '12.5%', width: '1.5em', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', height: '1.5em', backgroundColor: '#505D6B', textColor: '#ffffff' }}>
                            <Typography>3</Typography>
                          </div>
                          <IconButton sx={{ marginRight: '0.125em' }}>
                            <DownIcon />
                          </IconButton>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item sx={{ borderBottom: '1px solid #3A4652', height: 'calc(100% / 6)'}}>
                      <Grid item container sx={{marginBottom: '0.5em', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Typography color='#ccc'>Compiled</Typography>
                        <IconButton sx={{marginRight: '0.125em'}}> <DownIcon/> </IconButton>
                      </Grid>
                    </Grid>
                    <Grid item container direction='row-reverse' sx={{ borderTop: '1px solid #3A4652', height: 'calc(100% / 3)', justifyContent: 'space-between'}}>
                        <Grid item container sx={{marginBottom: '0.5em', alignItems: 'center', justifyContent: 'space-between'}}>
                          <Typography color='#ccc'>Query</Typography>
                          <IconButton sx={{marginRight: '0.125em'}}> <DownIcon/> </IconButton>
                        </Grid>
                        <Grid item container sx={{paddingBottom: '1em', marginTop: '0.5em', marginRight: '1em', justifyContent: 'space-between'}}>
                          <Button variant="contained" disableElevation sx={{height: '3em', width: 'calc(50% - 0.75em)', textTransform: 'none', backgroundColor: '#505D6B', color: '#ffffff' }} >
                            <Typography noWrap>Execute query</Typography>
                          </Button>
                          <Button variant="contained" disableElevation sx={{height: '3em', width: 'calc(50% - 0.75em)', textTransform: 'none', backgroundColor: '#547CD7', color: '#ffffff' }} >
                            <Typography noWrap>Run this node</Typography>
                          </Button>
                        </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container direction='column' spacing={0} sx={{ flex: '1 1 50%', backgroundColor: '#24303C', height: '50%', maxHeight: '50%'  }}>
            <Grid item sx={{height: '60px', borderBottom: '1px solid #727E8A'}}>
              <div style={{paddingInline: '0.5em', height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'white'}}>
                <OmicTabs tabs={bottomTabs} indicatorColor='inherit'/>
              </div>
            </Grid> 

            <Grid item sx={{height: 'calc(100% - 60px)', maxHeight: 'calc(100% - 60px)'}}>
              <Grid container sx={{height: '100%'}}>
                <Grid item xs={4} container direction='column' sx={{borderRight: '1px solid #727E8A',}}>
                  <Grid item sx={{height: '60px'}}>
                    <div style={{marginLeft: '1.75em', height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                      <Typography color='#8395A4' sx={{marginRight: '0.5em'}}>Refresh</Typography>
                      <IconButton>
                          <RefershIcon />
                      </IconButton>
                    </div>
                  </Grid> 
                  <Grid item sx={{height: 'calc(100% - 60px)'}}>
                    <div style={{marginLeft: '0.75em'}}>
                      <BottomTreeView />
                    </div>
                  </Grid> 
                </Grid>
                <Grid item xs={8} container direction='column' sx={{overflow: 'auto'}}>
                  <Grid item sx={{height: '60px', borderBottom: '1px solid #727E8A'}}>
                    <Grid container sx={{marginTop: '0.75em', px: '1em', alignItems: 'center', justifyContent: 'space-between'}}>
                      <Grid item>
                        <Grid container>
                            <Chip label="view" color='success' sx={{height: '2em'}}/>
                            <Typography mx='1em' color='white'>dataform_demo.dataset_1</Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <IconButton>
                            <CloseIcon />
                        </IconButton>
                      </Grid>
                    </Grid>                  
                  </Grid> 
                  <Grid item sx={{height: 'calc(100% - 60px)'}}>
                    <OmicTable />
                  </Grid> 
                </Grid>
              </Grid>
            </Grid> 
          </Grid>
        </Box>
      </Box>
    </Box>
  </Box>
  );
};

export default Layout;
