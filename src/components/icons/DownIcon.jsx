import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function DownIcon(props) {
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
    const StyledSvgIcon = styled(SvgIcon)({
        transform: `rotate(${deg}deg)`,
        fill: 'none',
        stroke: (props.active&&'#fff') || '#8395A4',
        width: '20px',
        height: '20px',
    });
    return (
        <StyledSvgIcon viewBox='0 0 64 64'>
            <g>
                <polyline
                    strokeWidth={2}
                    strokeLinejoin="bevel"
                    strokeMiterlimit={10}
                    points="15,24 32,41  49,24  "
                />
            </g>
        </StyledSvgIcon>
    );
  }

  export default DownIcon;