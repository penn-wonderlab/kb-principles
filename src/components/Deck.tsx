import React, { useState } from 'react';
import type { Principle } from '../data/principles';
import { PrincipleCard } from './PrincipleCard';
import { PrincipleModal } from './PrincipleModal';

interface DeckProps {
    principles: Principle[];
    flippedIds: Set<string>;
    onFlip: (id: string) => void;
}

export const Deck: React.FC<DeckProps> = ({ principles, flippedIds, onFlip }) => {
    const [expandedPrincipleId, setExpandedPrincipleId] = useState<string | null>(null);

    const expandedPrinciple = expandedPrincipleId
        ? principles.find(p => p.id === expandedPrincipleId)
        : null;

    const handleOpenPrinciple = (id: string) => {
        setExpandedPrincipleId(id);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {principles.map((principle) => (
                    <PrincipleCard
                        key={principle.id}
                        principle={principle}
                        isFlipped={flippedIds.has(principle.id)}
                        onFlip={() => onFlip(principle.id)}
                        onExpand={() => setExpandedPrincipleId(principle.id)}
                    />
                ))}
            </div>

            {expandedPrinciple && (
                <PrincipleModal
                    principle={expandedPrinciple}
                    isOpen={!!expandedPrincipleId}
                    onClose={() => setExpandedPrincipleId(null)}
                    onOpenPrinciple={handleOpenPrinciple}
                />
            )}
        </>
    );
};
