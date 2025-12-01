import { useState } from 'react';
import { Deck } from './components/Deck';
import { principles } from './data/principles';

function App() {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(principles.map(p => p.category)));

  const [activePrinciples, setActivePrinciples] = useState(principles);
  const [flippedIds, setFlippedIds] = useState<Set<string>>(new Set());

  // Update active principles when filter changes
  const filteredPrinciples = filter
    ? principles.filter(p => p.category === filter)
    : principles;

  // Reset to original order and unflip all
  const handleReset = () => {
    setActivePrinciples(filteredPrinciples);
    setFlippedIds(new Set());
  };

  // Toggle flip for all visible cards
  const handleFlipAll = () => {
    const allVisibleIds = activePrinciples.map(p => p.id);
    const allFlipped = allVisibleIds.every(id => flippedIds.has(id));

    if (allFlipped) {
      // Unflip all visible
      const newFlipped = new Set(flippedIds);
      allVisibleIds.forEach(id => newFlipped.delete(id));
      setFlippedIds(newFlipped);
    } else {
      // Flip all visible
      const newFlipped = new Set(flippedIds);
      allVisibleIds.forEach(id => newFlipped.add(id));
      setFlippedIds(newFlipped);
    }
  };

  const handleSortAlpha = () => {
    const sorted = [...activePrinciples].sort((a, b) => a.title.localeCompare(b.title));
    setActivePrinciples(sorted);
  };

  const handleSortNumeric = () => {
    const sorted = [...activePrinciples].sort((a, b) => Number(a.id) - Number(b.id));
    setActivePrinciples(sorted);
  };

  const handleShuffle = () => {
    const shuffled = [...activePrinciples].sort(() => Math.random() - 0.5);
    setActivePrinciples(shuffled);
  };

  const handleRandom = () => {
    const random = activePrinciples[Math.floor(Math.random() * activePrinciples.length)];
    setActivePrinciples([random]);
  };

  const handleDraw3 = () => {
    const shuffled = [...activePrinciples].sort(() => Math.random() - 0.5);
    setActivePrinciples(shuffled.slice(0, 3));
  };

  const handleCardFlip = (id: string) => {
    const newFlipped = new Set(flippedIds);
    if (newFlipped.has(id)) {
      newFlipped.delete(id);
    } else {
      newFlipped.add(id);
    }
    setFlippedIds(newFlipped);
  };

  // Sync activePrinciples with filter when filter changes
  // We use a key on the Deck or useEffect, but simpler is to just reset when filter changes.
  // Actually, let's use an effect to update activePrinciples when filter changes.
  // However, since we are using hooks, let's just use an effect.
  // But wait, if we use useEffect, we might get infinite loops if not careful.
  // Better approach: When filter changes, we should reset activePrinciples.
  // We can do this by adding a useEffect or updating the setFilter handler.
  // Let's update the setFilter handler.

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                KB Principles
              </h1>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto no-scrollbar">
              <button
                onClick={() => { setFilter(null); setActivePrinciples(principles); }}
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
                  onClick={() => {
                    setFilter(cat);
                    setActivePrinciples(principles.filter(p => p.category === cat));
                  }}
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

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-100 rounded-lg overflow-x-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Actions:</span>
            <button onClick={handleReset} className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white hover:shadow-sm rounded-md transition-all">
              🔄 Reset
            </button>
            <button onClick={handleFlipAll} className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white hover:shadow-sm rounded-md transition-all">
              ⇄ Flip All
            </button>
            <button onClick={handleSortAlpha} className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white hover:shadow-sm rounded-md transition-all">
              ab Sort A-Z
            </button>
            <button onClick={handleSortNumeric} className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white hover:shadow-sm rounded-md transition-all">
              12 Sort Numeric
            </button>
            <button onClick={handleShuffle} className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white hover:shadow-sm rounded-md transition-all">
              🔀 Shuffle
            </button>
            <button onClick={handleRandom} className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white hover:shadow-sm rounded-md transition-all">
              ❓ Random Card
            </button>
            <button onClick={handleDraw3} className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white hover:shadow-sm rounded-md transition-all">
              ✋ Draw 3
            </button>
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

        <Deck principles={activePrinciples} flippedIds={flippedIds} onFlip={handleCardFlip} />
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
