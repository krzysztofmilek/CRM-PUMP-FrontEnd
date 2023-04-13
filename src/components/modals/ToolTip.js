import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ToolTip() {
  return (

      
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={
            <Tooltip id="tooltip-top">
              Tooltip on 
            </Tooltip>
          }
        >
         <img className="imgTable" 
             
             src="https://img.icons8.com/windows/64/null/remove-user-male--v1.png" 
             alt="Usuń" 
             />
     

        </OverlayTrigger>
     
    
  );
}

export default ToolTip;