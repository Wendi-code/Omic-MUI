import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function AdjustIcon(props) {
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
        width: '20px',
        height: '20px',
    });
    return (
        <StyledSvgIcon viewBox="0 0 15 15" >
            <path d="M15 3.5L6.5 3.5M6.5 3.5C6.5 2.39543 5.60457 1.5 4.5 1.5C3.39543 1.5 2.5 2.39543 2.5 3.5M6.5 3.5C6.5 4.60457 5.60457 5.5 4.5 5.5C3.39543 5.5 2.5 4.60457 2.5 3.5M2.5 3.5L0 3.5M15 11.5L12.5 11.5M12.5 11.5C12.5 10.3954 11.6046 9.5 10.5 9.5C9.39543 9.5 8.5 10.3954 8.5 11.5M12.5 11.5C12.5 12.6046 11.6046 13.5 10.5 13.5C9.39543 13.5 8.5 12.6046 8.5 11.5M8.5 11.5H1.27146e-07" stroke="#8395A4"></path>
        </StyledSvgIcon>
    );
  }

  export default AdjustIcon;