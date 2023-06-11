import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function RefershIcon(props) {
    const StyledSvgIcon = styled(SvgIcon)({
        transform: 'rotate(90deg)',
        fill: '#8395A4',
        stroke: (props.active&&'#fff') || '#8395A4',
        width: '20px',
        height: '20px',
    });
    return (
        <StyledSvgIcon viewBox='0 0 28 28'>
            <g>
            <g>
                <path d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0c4,0,7.8,2.1,10,5.4V1h2v8h-8V7h4.7c-1.8-3.1-5.1-5-8.7-5C6.5,2,2,6.5,2,12 s4.5,10,10,10s10-4.5,10-10h2C24,18.6,18.6,24,12,24z" />
            </g>
            </g>  
        </StyledSvgIcon>
    );
  }

  export default RefershIcon;