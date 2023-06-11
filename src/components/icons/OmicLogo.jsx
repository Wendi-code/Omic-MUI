import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function OmicLogo(props) {
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
        color: (props.active&&'#fff') || '#8395A4',
        width: '32px',
        height: '32px',
    });
    return (
        <StyledSvgIcon viewBox="0 0 256 256">
            <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="24"/>
            <circle cx="100" cy="140" r="40" fill="none" stroke="white" strokeWidth="24"/>
        </StyledSvgIcon>
    );
  }

  export default OmicLogo;