import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Principle } from '../data/principles';
import { principles } from '../data/principles';

interface PrincipleModalProps {
    principle: Principle;
    isOpen: boolean;
    onClose: () => void;
    onOpenPrinciple: (id: string) => void;
}

export const PrincipleModal: React.FC<PrincipleModalProps> = ({
    principle,
    isOpen,
    onClose,
    onOpenPrinciple
}) => {
    const getRelatedPrinciple = (id: string) => {
        return principles.find(p => p.id === id);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="text-5xl">{principle.icon}</div>
                                <div>
                                    <div className="text-sm font-semibold opacity-90 uppercase tracking-wider mb-1">
                                        {principle.id}. {principle.category}
                                    </div>
                                    <h2 className="text-2xl font-bold">{principle.title}</h2>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                                aria-label="Close modal"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8">
                            <div className="max-w-4xl mx-auto space-y-8">
                                {/* Main Description */}
                                <div className="flex items-start gap-6 bg-teal-50 p-6 rounded-xl">
                                    <div className="text-6xl">{principle.icon}</div>
                                    <p className="text-lg text-slate-700 leading-relaxed flex-1">
                                        {principle.fullDescription}
                                    </p>
                                </div>

                                {/* Ask Yourself */}
                                {principle.askYourself && principle.askYourself.length > 0 && (
                                    <section>
                                        <h3 className="text-xl font-bold text-teal-600 mb-4 uppercase tracking-wide">
                                            Ask Yourself
                                        </h3>
                                        <ul className="space-y-2">
                                            {principle.askYourself.map((question, idx) => (
                                                <li key={idx} className="text-slate-700 italic">
                                                    {question}
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* What Does It Look Like */}
                                {principle.whatDoesItLookLike && principle.whatDoesItLookLike.length > 0 && (
                                    <section>
                                        <h3 className="text-xl font-bold text-teal-600 mb-4 uppercase tracking-wide">
                                            What Does It Look Like?
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {principle.whatDoesItLookLike.map((example, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`p-4 rounded-lg border-2 flex items-start gap-3 ${example.isGood
                                                        ? 'bg-green-50 border-green-200'
                                                        : 'bg-red-50 border-red-200'
                                                        }`}
                                                >
                                                    <div className="flex-shrink-0 text-xl">
                                                        {example.isGood ? '✓' : '✗'}
                                                    </div>
                                                    <p className="text-slate-700">{example.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {/* Classroom Examples */}
                                {principle.classroomExamples && principle.classroomExamples.length > 0 && (
                                    <section>
                                        <h3 className="text-xl font-bold text-teal-600 mb-4 uppercase tracking-wide">
                                            What does it look like in a classroom?
                                        </h3>
                                        <div className="space-y-6">
                                            {principle.classroomExamples.map((example, idx) => (
                                                <div key={idx} className="border-2 border-teal-200 rounded-lg p-6">
                                                    <h4 className="font-bold text-lg mb-2 text-teal-800">
                                                        {example.title}
                                                    </h4>
                                                    <p className="text-slate-700 leading-relaxed">
                                                        {example.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {/* Related Principles */}
                                {principle.relatedPrinciples && principle.relatedPrinciples.length > 0 && (
                                    <section>
                                        <h3 className="text-xl font-bold text-teal-600 mb-4 uppercase tracking-wide">
                                            Related Principles
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {principle.relatedPrinciples.map((relatedId) => {
                                                const related = getRelatedPrinciple(relatedId);
                                                if (!related) return null;
                                                return (
                                                    <button
                                                        key={relatedId}
                                                        onClick={() => onOpenPrinciple(relatedId)}
                                                        className="px-4 py-2 bg-teal-100 hover:bg-teal-200 text-teal-800 rounded-lg font-medium transition-colors underline"
                                                    >
                                                        {related.title}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </section>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
