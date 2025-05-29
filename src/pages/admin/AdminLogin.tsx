import React, { useState } from 'react';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('https://hi-tech-backend-626g.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',  // important for cookies
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (data.success) {
        onLoginSuccess(data.data.admin); // pass admin info up
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 border rounded shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Admin Login</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 rounded transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
