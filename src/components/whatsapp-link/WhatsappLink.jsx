

import React from "react";
import { Button } from "../buttons/Button";

const WhatsAppLink = ({ message, children, ...props }) => {
  const phone = "34654068208"; // número fijo de la empresa
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;
 
 
 

  return (
    
    
    <Button
    as="a"
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </Button>
    
    
    
    
    
  );
};

export default WhatsAppLink;
