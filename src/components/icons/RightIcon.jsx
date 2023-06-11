import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function RightIcon(props) {
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
        color: (props.active&&'#fff') || '#8395A4',
        width: '20px',
        height: '20px',
    });
    return (
        <StyledSvgIcon viewBox="-77 0 512 512" >
            <path d="M98 460L64 426 227 262 64 98 98 64 294 262 98 460Z" />
        </StyledSvgIcon>
    );
  }

  export default RightIcon;