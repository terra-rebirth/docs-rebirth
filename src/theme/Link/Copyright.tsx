import React from 'react';
import ThemedImage from '@theme/ThemedImage';

const Copyright: React.FC = () => {
  return (
    <div className="copyright col">
      <a href='https://home.opz.life/'>
        <ThemedImage
          sources={{
            light:"/img/icons/terraform-labs.svg",
            dark:"/img/Luna-color.svg"}}
            height="40px"
        />
      </a>
      <p style={{fontSize: '10px'}}>{`Copyright © ${new Date().getFullYear()} Opz Labs`}</p>
    </div>
  )
}

export default Copyright;