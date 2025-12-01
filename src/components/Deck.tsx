import React from 'react';
import type { Principle } from '../data/principles';
import { PrincipleCard } from './PrincipleCard';

interface DeckProps {
    principles: Principle[];
}

export const Deck: React.FC<DeckProps> = ({ principles }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {principles.map((principle) => (
                <PrincipleCard key={principle.id} principle={principle} />
            ))}
        </div>
    );
};
