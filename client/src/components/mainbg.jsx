import { useEffect, useState } from 'react';

function MainBG() {
  const [message, setMessage] = useState('');
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  console.log("✅ API_BASE_URL:", API_BASE_URL);
  console.log("🌐 Full ENV:", import.meta.env);
  console.log("🌍 API:", import.meta.env.VITE_API_BASE_URL);

  useEffect(() => {
    if (!API_BASE_URL) {
      console.warn("❌ API_BASE_URL is undefined. Check environment variables.");
      return;
    }

    fetch(`${API_BASE_URL}/`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("❌ Error fetching from backend:", err));
  }, [API_BASE_URL]);

  return (
    <div className="card">
      <p>🟢 Backend Message: <strong>{message || "Loading..."}</strong></p>
    </div>
  );
}

export default MainBG;
