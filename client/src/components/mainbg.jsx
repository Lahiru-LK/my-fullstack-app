import { useEffect, useState } from 'react';

function MainBG() {
  const [message, setMessage] = useState('');
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  console.log("✅ API_BASE_URL:", API_BASE_URL);

  
  useEffect(() => {
    fetch(`${API_BASE_URL}/`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching from backend:", err));
  }, []);

  return (
    <div className="card">
      <p>🟢 Backend Message: <strong>{message}</strong></p>
    </div>
  );
}

export default MainBG;
