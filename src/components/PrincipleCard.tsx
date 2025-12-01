import React from 'react';
import { motion } from 'framer-motion';
import type { Principle } from '../data/principles';
import { cn } from '../lib/utils';

interface PrincipleCardProps {
    principle: Principle;
    className?: string;
    isFlipped: boolean;
    onFlip: () => void;
}

export const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle, className, isFlipped, onFlip }) => {
    return (
        <div
            className={cn("relative h-80 w-full cursor-pointer perspective-1000", className)}
            onClick={onFlip}
        >
            <motion.div
                className="h-full w-full relative preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-white shadow-lg border border-slate-200 p-6 flex flex-col items-center justify-center text-center backface-hidden">
                    <div className="text-6xl mb-4">{principle.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{principle.title}</h3>
                    <p className="text-sm text-slate-500">{principle.shortDescription}</p>
                    <div className="mt-4 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                        {principle.category}
                    </div>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 h-full w-full rounded-xl bg-indigo-600 shadow-lg p-6 flex flex-col items-center justify-center text-center text-white backface-hidden"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <h3 className="text-lg font-bold mb-4 border-b border-indigo-400 pb-2">{principle.title}</h3>
                    <p className="text-sm leading-relaxed overflow-y-auto max-h-full scrollbar-hide">
                        {principle.fullDescription}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
