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
        fill: '#8395A4',
        stroke: (props.active&&'#fff') || '#8395A4',
        width: '20px',
        height: '20px',
    });
    return (
        <StyledSvgIcon viewBox='0 0 20 20'>
            <path d="M14.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 14 7.8zm-8 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 6 7.8z"/>
        </StyledSvgIcon>
    );
  }

  export default DownIcon;