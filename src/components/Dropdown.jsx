// import React, { useState } from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';

// import chevrondown from '../img/chevron-down.svg'

// export default function Dropdown() {
//   const [anchorEl, setAnchorEl] = useState(null);
  
//   const handleMouseEnter = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMouseLeave = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   return (
//     <div>
//       <Typography
//         aria-owns={open ? 'mouse-over-popover' : undefined}
//         aria-haspopup="true"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         КОНТАКТЫ
//       </Typography>
//       <Popover
//         id="mouse-over-popover"
//         sx={{
//           pointerEvents: 'none',
//         }}
//         open={open}
//         anchorEl={anchorEl}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         onClose={handleMouseLeave}
//         disableRestoreFocus
//       >
//         <Typography>О КОМПАНИИ <img src={chevrondown} alt="icon" /></Typography>
//       </Popover>
//     </div>
//   );
// }