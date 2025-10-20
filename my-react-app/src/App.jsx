import { useState, useEffect } from 'react';
import './App.css';

// Import your components here
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';

function App() {
  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch API data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      {/* Navbar component */}
      <Navbar />

      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
            
            <div className="flex items-center gap-4 my-4">
              <Button variant="red" onClick={() => setCount((count) => count - 1)}>
                -
              </Button>
              <span className="text-xl font-bold">{count}</span>
              <Button variant="green" onClick={() => setCount((count) => count + 1)}>
                +
              </Button>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Implement your TaskManager component here
            </p>
            <div className="w-full mt-4">
              <TaskManager />
            </div>

          </div>
        </div>

        {/* API data display */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>

          {loading && <p className="text-gray-500 dark:text-gray-400">Loading...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}

          <ul className="space-y-2">
            {apiData.map((item) => (
              <li
                key={item.id}
                className="p-3 border rounded hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.body}</p>
              </li>
            ))}
          </ul>

          {/* Refresh button */}
          <div className="mt-4 flex justify-center">
            <Button variant="primary" onClick={() => window.location.reload()}>
              Refresh Data
            </Button>
          </div>
        </div>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
