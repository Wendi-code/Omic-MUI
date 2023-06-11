import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function DocumentLookIcon(props) {
    let deg;
    switch (props.type){
        case 'left':
            deg = 90;
            break;
        case 'bottom':
            deg = 0;
            break;
        
        case 'right':
            deg = 270;
            break;
        default:
            deg = 0;
    }
    return (
        <SvgIcon viewBox='0 0 24 24'>
            <style type="text/css">
                {
                    "\n\t.st0{opacity:0.2;fill:none;stroke:#000000;stroke-width:5.000000e-02;stroke-miterlimit:10;}\n"
                }
            </style>
            <g id="Layer_1" />
            <g id="Layer_2">
            <g>
                <path d="M12,20H8c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h3v3c0,2.2,1.8,4,4,4h3v1.9c0,0.6,0.4,1,1,1s1-0.4,1-1V10c0,0,0,0,0-0.1    c0-0.1,0-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.3c0,0,0,0,0,0l-7-7c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1,0-0.1,0    c-0.1,0-0.2,0-0.3-0.1c0,0,0,0-0.1,0H8C5.8,2,4,3.8,4,6v12c0,2.2,1.8,4,4,4h4c0.6,0,1-0.4,1-1S12.6,20,12,20z M13,5.4L16.6,9H15    c-1.1,0-2-0.9-2-2V5.4z" />
                <path d="M20.7,20.3l-1-1c0,0-0.1-0.1-0.2-0.1c0.3-0.5,0.5-1.1,0.5-1.7c0-1.9-1.6-3.5-3.5-3.5S13,15.6,13,17.5s1.6,3.5,3.5,3.5    c0.6,0,1.2-0.2,1.7-0.5c0,0.1,0.1,0.1,0.1,0.2l1,1c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3C21.1,21.3,21.1,20.7,20.7,20.3z     M16.5,19c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S17.3,19,16.5,19z" />
            </g>
            </g>        
        </SvgIcon>
    );
  }

  export default DocumentLookIcon;