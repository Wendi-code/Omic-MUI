import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function PlayIcon(props) {
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
        width: '20px',
        height: '20px',
    });
    return (
        <StyledSvgIcon viewBox='0 0 200 200'>
            <rect width="200" height="200" rx="25" ry="25" fill="#547CD7" />
            <path fill="#FFFFFF" d="M80,60 L140,100 L80,140 Z" />
        </StyledSvgIcon>
    );
  }

  export default PlayIcon;