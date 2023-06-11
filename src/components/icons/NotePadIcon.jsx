import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function NotePadIcon(props) {
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
        fill: (props.active&&'#fff') || '#8395A4',
        width: '20px',
        height: '20px',
    });
    return (
        <StyledSvgIcon viewBox='0 0 1024 1024'>
<path d="M790.811 120.124h-56.047V64.133h-55.99v55.99H342.837v-55.99h-55.989v55.99h-56.047c-61.556 0-111.921 50.366-111.921 111.92v616.004c0 61.555 50.364 111.919 111.92 111.919h560.011c61.556 0 111.921-50.364 111.921-111.92V232.044c0-61.554-50.365-111.92-111.921-111.92z m-560.01 55.99h56.047v55.987h55.99v-55.987h335.936v55.987h55.99v-55.987h56.047c30.841 0 55.932 25.09 55.932 55.93V344.08H174.869V232.043c0-30.84 25.09-55.929 55.932-55.929z m560.01 727.862h-560.01c-30.842 0-55.932-25.09-55.932-55.93V400.07h671.873v447.978c0 30.839-25.09 55.928-55.931 55.928z" fill="" /><path d="M286.848 512.048h447.916v55.99H286.848v-55.99zM286.848 681.766h447.916v55.99H286.848v-55.99z" fill="" />        </StyledSvgIcon>
    );
  }

  export default NotePadIcon;