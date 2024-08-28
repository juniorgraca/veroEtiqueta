import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

const COOKIE_NAME = 'cookieBannerDismissed';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Verifica se o cookie existe
    const cookieValue = Cookie.get(COOKIE_NAME);
    if (!cookieValue) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    // Define o cookie para expirar em 365 dias
    Cookie.set(COOKIE_NAME, 'true', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.banner}>
      <p>Este é um aviso de cookies. Ao continuar navegando, você aceita o uso de cookies.</p>
      <button onClick={handleDismiss} style={styles.button}>Ok, entendi!</button>
    </div>
  );
};

const styles = {
  banner: {
    position: 'fixed' as 'fixed',  // TypeScript exige o uso do tipo específico para propriedades CSS
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center' as 'center',
    zIndex: 1000,
  },
  button: {
    marginLeft: '10px',
    padding: '5px 10px',
    backgroundColor: '#fff',
    color: '#333',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer' as 'pointer',
  },
};

export default CookieBanner;
