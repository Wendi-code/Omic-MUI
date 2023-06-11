import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function TriCircleIcon(props) {
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
        stroke: (props.active&&'#fff') || '#8395A4',
        width: '20px',
        height: '20px',
    });
    return (
        <StyledSvgIcon viewBox='0 0 100 100'>
            <circle cx="25" cy="75" r="10" fill="none" stroke="white" strokeWidth="6"/>
            <circle cx="75" cy="75" r="10" fill="none" stroke="white" strokeWidth="6"/>
            <circle cx="50" cy="25" r="10" fill="none" stroke="white" strokeWidth="6"/>
            <line x1="35" y1="75" x2="65" y2="75" stroke="white" strokeWidth="6"/>
            <line x1="70" y1="66" x2="53" y2="35" stroke="white" strokeWidth="6"/>
            <line x1="46" y1="34" x2="28" y2="65" stroke="white" strokeWidth="6"/>
    </StyledSvgIcon>
    );
  }

  export default TriCircleIcon;