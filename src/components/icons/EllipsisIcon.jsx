import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function EllipsisIcon(props) {
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
    const RotatedBox = styled(SvgIcon)({
        transform: `rotate(${deg}deg)`,
        fill: (props.active&&'#fff') || '#8395A4',
        width: '20px',
        height: '20px',
    });
    return (
      <RotatedBox viewBox='0 0 24 24'>
        <rect x={0} fill="none" width={24} height={24} />
        <g>
            <path d="M7 12c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm12-2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-7 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" />
        </g>
      </RotatedBox>
    );
  }

  export default EllipsisIcon;