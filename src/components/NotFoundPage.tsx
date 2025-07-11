import React from 'react';

interface NotFoundPageProps {
  imagePath?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ imagePath }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: '#000'
    }}>
      {imagePath && (
        <>
          {/* Background layer - blurred image covering whole screen */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${imagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
            transform: 'scale(1.3)',
            zIndex: 1
          }} />
          
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2
          }}>
            <img 
              src={imagePath} 
              alt="Page not found"
              style={{
                height: '100vh',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </>
      )}
      {!imagePath && (
        <div style={{
          color: 'white',
          fontSize: '2rem',
          fontFamily: 'Arial, sans-serif',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}>
          404 - Page Not Found
        </div>
      )}
    </div>
  );
};

export default NotFoundPage;
