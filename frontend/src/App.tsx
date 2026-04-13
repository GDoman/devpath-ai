import { useEffect, useState } from 'react';

type StatusResponse = {
  status: string;
  app: string;
  timestamp: string;
};

function App() {
  const [statusData, setStatusData] = useState<StatusResponse | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/status')
      .then((response) => response.json())
      .then((data: StatusResponse) => {
        setStatusData(data);
      })
      .catch(() => {
        setError('Could not load backend status.');
      });
  }, []);

  return (
    <main className="app">
      <div className="card">
        <p className="eyebrow">DevPath AI</p>
        <h1>Backend Status</h1>
        <p>
          This frontend calls the NestJS backend and displays the status
          response.
        </p>

        {error && <p className="error">{error}</p>}

        {!statusData && !error && <p className="status-note">Loading...</p>}

        {statusData && (
          <div className="status-list">
            <p>
              <strong>Status:</strong> {statusData.status}
            </p>
            <p>
              <strong>App:</strong> {statusData.app}
            </p>
            <p>
              <strong>Timestamp:</strong> {statusData.timestamp}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
