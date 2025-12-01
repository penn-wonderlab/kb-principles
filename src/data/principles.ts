export interface Principle {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: string; // Emoji or icon name
    category: 'Idea Generation' | 'Community' | 'Advancement' | 'Assessment';
}

export const principles: Principle[] = [
    {
        id: '1',
        title: 'Real Ideas, Authentic Problems',
        shortDescription: 'Knowledge building starts with real ideas and authentic problems.',
        fullDescription: 'Knowledge problems arise from efforts to understand the world. The problems are real in the sense that they are problems that the learners really care about and that have no pre-specified answers.',
        icon: '💡',
        category: 'Idea Generation',
    },
    {
        id: '2',
        title: 'Improvable Ideas',
        shortDescription: 'All ideas are treated as improvable.',
        fullDescription: 'Participants work continuously to improve the quality, coherence, and utility of ideas. For such work to prosper, the culture must be one of psychological safety, so that people feel safe in taking risks, revealing ignorance, and voicing half-baked notions.',
        icon: '🌱',
        category: 'Idea Generation',
    },
    {
        id: '3',
        title: 'Idea Diversity',
        shortDescription: 'Idea diversity is essential to the development of knowledge.',
        fullDescription: 'To understand an idea is to understand the ideas that surround it, including those that stand in contrast to it. Idea diversity creates a rich environment for ideas to evolve into new and more refined forms.',
        icon: '🌈',
        category: 'Idea Generation',
    },
    {
        id: '4',
        title: 'Rise Above',
        shortDescription: 'Creative synthesis of ideas.',
        fullDescription: 'Means working with diverse ideas, finding connections, and synthesizing them into a more inclusive and higher-level understanding. It is about moving beyond the trivial to the profound.',
        icon: '🚀',
        category: 'Advancement',
    },
    {
        id: '5',
        title: 'Epistemic Agency',
        shortDescription: 'Learners take charge of their own knowledge advancement.',
        fullDescription: 'Participants set forth their own ideas and negotiate a fit between their personal ideas and the ideas of others, using contrasts to spark and sustain knowledge advancement rather than depending on others to chart that course for them.',
        icon: '🧠',
        category: 'Community',
    },
    {
        id: '6',
        title: 'Community Knowledge',
        shortDescription: 'Collective responsibility for community knowledge.',
        fullDescription: 'The goal is to advance the knowledge of the community, not just individual knowledge. Members contribute to a shared public space of knowledge, which becomes a resource for the whole community.',
        icon: '🤝',
        category: 'Community',
    },
    {
        id: '7',
        title: 'Democratizing Knowledge',
        shortDescription: 'All participants are legitimate contributors.',
        fullDescription: 'All participants are empowered to engage in knowledge building. Diversity is not just tolerated but viewed as a strength. There is a sense of shared purpose and a commitment to the advancement of knowledge for the common good.',
        icon: '🌍',
        category: 'Community',
    },
    {
        id: '8',
        title: 'Symmetric Knowledge Advancement',
        shortDescription: 'Expertise is distributed within and between communities.',
        fullDescription: 'Symmetry in knowledge advancement means that to give knowledge is to get knowledge. The goal is to advance the knowledge of others as well as one’s own.',
        icon: '⚖️',
        category: 'Community',
    },
    {
        id: '9',
        title: 'Pervasive Knowledge Building',
        shortDescription: 'Knowledge building is not confined to school.',
        fullDescription: 'Knowledge building is not an add-on but is central to all work. It pervades mental life, in and out of school.',
        icon: '🌐',
        category: 'Advancement',
    },
    {
        id: '10',
        title: 'Constructive Uses of Authoritative Sources',
        shortDescription: 'Using sources to refine ideas, not just to find answers.',
        fullDescription: 'To know a discipline is to be in touch with the present state and growing edge of knowledge in the field. This requires respect for authoritative sources, combined with a critical stance and a willingness to question and improve upon them.',
        icon: '📚',
        category: 'Advancement',
    },
    {
        id: '11',
        title: 'Knowledge Building Discourse',
        shortDescription: 'Discourse that results in more than the sharing of knowledge.',
        fullDescription: 'The discourse of knowledge building results in the creation of new knowledge and the improvement of ideas. It is more than just sharing information; it is about transforming it.',
        icon: '💬',
        category: 'Advancement',
    },
    {
        id: '12',
        title: 'Embedded Transformative Assessment',
        shortDescription: 'Assessment is an integral part of the effort to advance knowledge.',
        fullDescription: 'Assessment is used to identify problems as the work proceeds and is embedded in the day-to-day workings of the organization. It is not a separate activity but is integral to the knowledge building process.',
        icon: '🧭',
        category: 'Assessment',
    },
];
