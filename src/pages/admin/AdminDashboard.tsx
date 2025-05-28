import React, { useEffect, useState } from 'react';

export default function AdminDashboard({ admin, onLogout }) {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [editNoticeId, setEditNoticeId] = useState(null);

  // Fetch notices on mount
  useEffect(() => {
    fetchNotices();
  }, []);

  async function fetchNotices() {
    try {
      const res = await fetch('https://hi-tech-backend-626g.onrender.com/api/notices', {
        credentials: 'include',
      });
      const data = await res.json();
      if (data.success) setNotices(data.data.notices || []);
      else setError(data.message || 'Failed to load notices');
    } catch (err) {
      setError('Network error while loading notices');
      console.error(err);
    }
  }

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setFile(null);
    setEditNoticeId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title || !description) {
      setError('Title and description are required');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      if (file) formData.append('attachment', file);

      let url = 'https://hi-tech-backend-626g.onrender.com/api/notices';
      let method = 'POST';

      if (editNoticeId) {
        url += `/${editNoticeId}`;
        method = 'PUT';
      }

      const res = await fetch(url, {
        method,
        credentials: 'include',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        fetchNotices();
        resetForm();
      } else {
        setError(data.message || 'Failed to save notice');
      }
    } catch (err) {
      setError('Network error while saving notice');
      console.error(err);
    }
  };

  const handleEdit = (notice) => {
    setTitle(notice.title);
    setDescription(notice.description);
    setEditNoticeId(notice._id);
    setFile(null);
    setError('');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this notice?')) return;

    try {
      const res = await fetch(`https://hi-tech-backend-626g.onrender.com/api/notices/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await res.json();

      if (data.success) {
        fetchNotices();
      } else {
        alert(data.message || 'Failed to delete notice');
      }
    } catch (err) {
      alert('Network error while deleting notice');
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch('https://hi-tech-backend-626g.onrender.com/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      const data = await res.json();
      if (data.success) onLogout();
      else alert(data.message || 'Logout failed');
    } catch (err) {
      alert('Network error during logout');
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4 border border-blue-200 p-6 rounded">
        <h2 className="text-xl font-semibold text-blue-900">
          {editNoticeId ? 'Edit Notice' : 'Add Notice'}
        </h2>
        {error && <p className="text-red-600">{error}</p>}

        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded resize-y"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
        />
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded"
          >
            {editNoticeId ? 'Update Notice' : 'Add Notice'}
          </button>
          {editNoticeId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2 className="text-2xl font-bold mb-4 text-blue-900">Existing Notices</h2>
      {notices.length === 0 ? (
        <p className="text-gray-600">No notices available.</p>
      ) : (
        <ul className="space-y-4">
          {notices.map((notice) => (
            <li
              key={notice._id}
              className="border border-blue-300 p-4 rounded flex justify-between items-start"
            >
              <div>
                <h3 className="font-semibold text-blue-900">{notice.title}</h3>
                <p className="text-gray-700">{notice.description}</p>
                {notice.fileUrl && (
                  <a
                    href={notice.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:underline"
                  >
                    View Attachment
                  </a>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleEdit(notice)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(notice._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
