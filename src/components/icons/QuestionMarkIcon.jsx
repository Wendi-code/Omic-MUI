import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function QuestionMarkIcon(props) {
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
        fill: '#D0BD8E',
        width: '32px',
        height: '32px',
    });
    return (
        <StyledSvgIcon viewBox='0 0 24 24'>
            <path
                d="M11 12H9v-.148c0-.876.306-1.499 1-1.852.385-.195 1-.568 1-1a1.001 1.001 0 00-2 0H7c0-1.654 1.346-3 3-3s3 1 3 3-2 2.165-2 3zm-2 3h2v-2H9v2z"
                fill="#D0BD8E"
            />
            <path
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1116 0 8 8 0 01-16 0z"
                fill="#D0BD8E"
            />
        </StyledSvgIcon>
    );
  }

  export default QuestionMarkIcon;