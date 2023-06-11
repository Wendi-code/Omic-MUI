import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

function OmicTabs(props) {
  const [activeTab, setActiveTab] = useState(0);
  const { tabs, indicatorColor } = props;
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Tabs value={activeTab} onChange={handleTabChange} indicatorColor={indicatorColor} textColor="inherit" sx={{display: 'flex', justifyContent: 'space-between'}}>
      {tabs.map((tab) => (
        <Tab disableRipple icon={tab.icon} iconPosition={tab.iconPosition } label={tab.label} key={tab.label} />
      ))}
    </Tabs>
  );
}

export default OmicTabs;