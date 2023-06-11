import { styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

function DockIcon(props) {
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
      <RotatedBox viewBox='0 0 56 56'>
        <path d="M10 49.5742 L49 49.5742 C54 49.5742 56.5 47.0742 56.5 42.3086 L56.5 13.6914 C56.5 8.9258 54 6.4258 49 6.4258 L10 6.4258 C5 6.4258 2.5 8.9258 2.5 13.6914 L2.5 42.3086 C2.5 47.0742 5 49.5742 10 49.5742 Z M10 10.1992 L49 10.1992 C51.5 10.1992 53 11.4414 53 13.8789 L53 42.1211 C53 44.5586 51.5 45.8008 49 45.8008 L10 45.8008 C7.5 45.8008 6 44.5586 6 42.1211 L6 13.8789 C6 11.4414 7.5 10.1992 10 10.1992 Z M43.6681 35.6523 C43.6681 34.4102 42.9649 33.3086 41.207 33.3086 L14.7929 33.3086 C13.0351 33.3086 12.3319 34.4102 12.3319 35.6523 L12.3319 36.5196 C12.3319 37.7617 13.0351 38.8633 14.7929 38.8633 L41.207 38.8633 C42.9649 38.8633 43.6681 37.7617 43.6681 36.5196 Z" />
      </RotatedBox>
    );
  }

  export default DockIcon;