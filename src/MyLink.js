import React, { useState } from 'react';
import './MyLink.css';

function MyLink({ href, text, content }) {
  const [isHovered, setIsHovered] = useState(false);

  const enter = () => {
    setIsHovered(true);
  };

  const exit = () => {
    setIsHovered(false);
  };

  return (
    <div className="link-container" onMouseEnter={enter} onMouseLeave={exit}>
      <a href={href}>
        {text}
      </a>
      {content && (
        <div className={`hover-content ${isHovered ? 'show' : ''}`}>
          {content}
        </div>
      )}
    </div>
  );
}

export default MyLink;
