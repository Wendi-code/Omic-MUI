import React, { useState } from 'react';
import {Chip } from '@mui/material';
import { Folder, ExpandMore as ExpandMoreIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

const TreeNode = ({ label, isFolder, fileType, children, indentLevel = 0 }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (isFolder) {
      setExpanded(!expanded);
    }
  };

  const getFileTypeColor = (fileType) => {

    const fileTypeColors = {
      config: '#528B98',
      SQL: '#8CA060',
      JS: '#FED66F',
      ops: '#548D9B',
      assert: '#C58B6A',
    };

    return fileTypeColors[fileType] || '#727E8A';
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
    paddingTop:(isFolder&&'8px') 
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
          <Chip
            label={fileType}
            style={{
              backgroundColor: getFileTypeColor(fileType),
              color: '#FFFFFF',
              marginRight: '4px',
              marginTop: '6px',
              height: '24px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          />
        )}
        {isFolder && <Folder fontSize="small" style={{ marginRight: '4px', color: '#727E8A' }} />}
        <div style={{ color: '#98A2AA', overflow: 'hidden', textOverflow: 'ellipsis'}}>{label}</div>
      </div>
      {expanded && children && (
        <div style={{ marginLeft: '20px'}}>
          {children.map((child) => (
            <TreeNode key={child.label} {...child} indentLevel={indentLevel + 1}  />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView = () => {
  const treeData = [
    {
      label: 'dataform',
      isFolder: false,
      fileType: 'config'
    },
    {
      label: 'package-lock',
      isFolder: false,
      fileType: 'config'
    },
    {
      label: 'package',
      isFolder: false,
      fileType: 'config'
    },
    {
      label: 'models',
      isFolder: true,
      children: [
        {
          label: '1_simple_examples',
          isFolder: true,
          children: [
            {
              label: 'dataset_1',
              isFolder: false,
              fileType: 'SQL'
            },
            {
              label: 'dataset_2_with_ref',
              isFolder: false,
              fileType: 'SQL'
            }
          ],
        },
        {
          label: '2_advanced_examples',
          isFolder: true,
          children: [
            {
              label: 'dataset_3_increased',
              isFolder: false,
              fileType: 'SQL'
            },
            {
              label: 'dataset_4_increased',
              isFolder: false,
              fileType: 'JS'
            }
          ],
        },
        {
          label: '3_operations_and_astronomical',
          isFolder: true,
          children: [
            {
              label: 'grant_access',
              isFolder: false,
              fileType: 'ops'
            },
            {
              label: 'simple_assertion',
              isFolder: false,
              fileType: 'assert'
            }
          ],
        },
      ],
    },
    {
      label: 'models_2',
      isFolder: true,
      children: [
        {
          label: '1_simple_examples',
          isFolder: true,
          children: [
            {
              label: 'dataset_1',
              isFolder: false,
              fileType: 'SQL'
            },
            {
              label: 'dataset_2_with_ref',
              isFolder: false,
              fileType: 'SQL'
            }
          ],
        },
        {
          label: '2_advanced_examples',
          isFolder: true,
          children: [
            {
              label: 'dataset_3_increased',
              isFolder: false,
              fileType: 'SQL'
            },
            {
              label: 'dataset_4_increased',
              isFolder: false,
              fileType: 'JS'
            }
          ],
        },
        {
          label: '3_operations_and_astronomical',
          isFolder: true,
          children: [
            {
              label: 'grant_access',
              isFolder: false,
              fileType: 'ops'
            },
            {
              label: 'simple_assertion',
              isFolder: false,
              fileType: 'assert'
            }
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {treeData.map((node) => (
        <TreeNode key={node.label} {...node} />
      ))}
    </div>
  );
};

export default TreeView;
