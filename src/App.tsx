import { useState } from 'react';
import { Deck } from './components/Deck';
import { principles } from './data/principles';

function App() {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(principles.map(p => p.category)));

  const filteredPrinciples = filter
    ? principles.filter(p => p.category === filter)
    : principles;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🏗️</span>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              KB Principles
            </h1>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto no-scrollbar">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${filter === null
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${filter === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Knowledge Building Principles
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore the 12 principles of Knowledge Building. Click on any card to flip it and learn more about the principle.
          </p>
        </div>

        <Deck principles={filteredPrinciples} />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500">
          <p>Designed for teachers to explore Knowledge Building principles.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
