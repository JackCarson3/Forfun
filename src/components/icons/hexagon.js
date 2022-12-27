import React from 'react';

const Hexagon = () => (
  <div
    style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'teal',
      opacity: '0.6',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    }}>
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: '50px',
        lineHeight: '100px',
        color: 'white',
      }}>
        E
    </div>
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: '50px',
        lineHeight: '100px',
        color: 'white',
      }}>
        C
    </div>
  </div>
);

export default Hexagon;
