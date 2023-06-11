import React, { useState } from 'react';
import { Chip } from '@mui/material';
import {
  Folder,
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import EyeIcon from './icons/EyeIcon';

const TreeNode = ({ label, isFolder, fileType, children, indentLevel = 0, selected, onClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = (event) => {
    event.stopPropagation();
    if (isFolder) {
      setExpanded(!expanded);
    }
  };

  const indentStyle = {
    borderLeft: indentLevel !== 0 && '1px solid #727E8A',
    paddingLeft: '8px',
  };

  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingBottom: '0.5em',
    ...indentStyle,
    backgroundColor: selected ? 'red' : 'transparent',
    fontWeight: selected ? 'bold' : 'normal',
    cursor: 'pointer',
  };

  const handleClick = (event) => {
    event.stopPropagation();
    if (!isFolder) {
      onClick(label);
    }
  };

  return (
    <div>
      <div onClick={handleToggle} style={contentStyle}>
        {isFolder ? (
          expanded ? (
            <ExpandMoreIcon fontSize="small" style={{ color: '#727E8A' }} />
          ) : (
            <ChevronRightIcon fontSize="small" style={{ color: '#727E8A' }} />
          )
        ) : (
          <EyeIcon />
        )}

        <div style={{ color: '#98A2AA', overflow: 'hidden', textOverflow: 'ellipsis', marginLeft: '0.5em' }} onClick={handleClick}>
          {label}
        </div>
      </div>
      {expanded && children && (
        <div style={{ marginLeft: '20px', marginTop: '8px' }}>
          {children.map((child) => (
            <TreeNode
              key={child.label}
              {...child}
              indentLevel={indentLevel + 1}
              selected={selected === child.label}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};


const BottomTreeView = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const treeData = [
    {
      label: 'datafrom_demo',
      isFolder: true,
      children: [
        {
          label: 'dataset_1',
          isFolder: false,
          fileType: 'SQL',
        },
        {
          label: 'dataset_5_from_script_builder',
          isFolder: false,
          fileType: 'SQL',
        },
        {
          label: 'dataset_3_incremental_date',
          isFolder: false,
          fileType: 'SQL',
        },
        {
          label: 'dataset_4_incremental_snapshot',
          isFolder: false,
          fileType: 'SQL',
        },
        {
          label: 'reporting_gb',
          isFolder: false,
          fileType: 'SQL',
        },
      ],
    },
    {
      label: 'datafrom_set2',
      isFolder: true,
      children: [],
    },
  ];

  const handleNodeClick = (label) => {
    console.log('handleNodeClick', label);
    setSelectedNode(label);
  };

  return (
    <div>
      {treeData.map((node) => (
        <TreeNode
          key={node.label}
          {...node}
          selected={selectedNode === node.label}
          onClick={handleNodeClick}
        />
      ))}
    </div>
  );
};

export default BottomTreeView;
