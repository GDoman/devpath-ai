import { type FormEvent, useEffect, useState } from 'react';

type StatusResponse = {
  status: string;
  app: string;
  timestamp: string;
};

type LearningGoalResponse = {
  originalInput: string;
  summary: string;
  nextStep: string;
};

function App() {
  const [statusData, setStatusData] = useState<StatusResponse | null>(null);
  const [error, setError] = useState('');
  const [goal, setGoal] = useState('');
  const [goalResponse, setGoalResponse] =
    useState<LearningGoalResponse | null>(null);
  const [goalError, setGoalError] = useState('');

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

  function handleGoalSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGoalError('');

    fetch('http://localhost:3000/api/learning-goal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ goal }),
    })
      .then((response) => response.json())
      .then((data: LearningGoalResponse) => {
        setGoalResponse(data);
      })
      .catch(() => {
        setGoalError('Could not submit learning goal.');
      });
  }

  return (
    <main className="app">
      <div className="card">
        <p className="eyebrow">DevPath AI</p>
        <h1>Learning Goal</h1>
        <p>
          Send a learning goal to the NestJS backend and see the simple response.
        </p>

        <form className="goal-form" onSubmit={handleGoalSubmit}>
          <label htmlFor="goal">What do you want to learn?</label>
          <textarea
            id="goal"
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            placeholder="Example: I want to learn React basics"
          />
          <button type="submit">Submit Goal</button>
        </form>

        {goalError && <p className="error">{goalError}</p>}

        {goalResponse && (
          <div className="status-list">
            <p>
              <strong>Original input:</strong> {goalResponse.originalInput}
            </p>
            <p>
              <strong>Summary:</strong> {goalResponse.summary}
            </p>
            <p>
              <strong>Next step:</strong> {goalResponse.nextStep}
            </p>
          </div>
        )}

        <h2>Backend Status</h2>

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
