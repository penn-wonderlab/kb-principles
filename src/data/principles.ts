export interface Example {
    text: string;
    isGood: boolean; // true = checkmark, false = X
}

export interface ClassroomExample {
    title: string;
    description: string;
}

export interface Principle {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: string; // Emoji or icon name
    category: 'Idea Generation' | 'Community' | 'Advancement' | 'Assessment';
    // New fields for expanded view
    askYourself?: string[];
    whatDoesItLookLike?: Example[];
    classroomExamples?: ClassroomExample[];
    relatedPrinciples?: string[]; // IDs of related principles
}

export const principles: Principle[] = [
    {
        id: '1',
        title: 'Real Ideas, Authentic Problems',
        shortDescription: 'Knowledge building starts with real ideas and authentic problems.',
        fullDescription: 'Knowledge problems arise from efforts to understand the world. The problems are real in the sense that they are problems that the learners really care about and that have no pre-specified answers.',
        icon: '💡',
        category: 'Idea Generation',
        askYourself: [
            'Are students working on problems they genuinely care about?',
            'Do the problems have pre-specified answers, or are they open to genuine inquiry?',
            'Are the ideas being generated tangible and treated as real objects of inquiry?',
        ],
        whatDoesItLookLike: [
            {
                text: 'Students investigating a local environmental issue they noticed',
                isGood: true,
            },
            {
                text: 'Working through textbook problems with known solutions',
                isGood: false,
            },
            {
                text: 'Exploring why some plants grow better in certain areas of the schoolyard',
                isGood: true,
            },
            {
                text: 'Copying definitions from the dictionary',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Environmental Investigation',
                description: 'Students notice that a nearby stream has changed color and develop questions about water pollution. They design their own investigation to understand the causes and propose solutions, with no predetermined answer from the teacher.',
            },
        ],
        relatedPrinciples: ['2', '5', '9'],
    },
    {
        id: '2',
        title: 'Improvable Ideas',
        shortDescription: 'All ideas are treated as improvable.',
        fullDescription: 'Participants work continuously to improve the quality, coherence, and utility of ideas. For such work to prosper, the culture must be one of psychological safety, so that people feel safe in taking risks, revealing ignorance, and voicing half-baked notions.',
        icon: '🌱',
        category: 'Idea Generation',
        askYourself: [
            'Is the classroom culture one where students feel safe sharing incomplete ideas?',
            'Are ideas treated as works in progress rather than final products?',
            'Do students regularly revisit and refine their earlier thinking?',
        ],
        whatDoesItLookLike: [
            {
                text: 'Students revising their theories based on new evidence',
                isGood: true,
            },
            {
                text: 'Ideas marked as "right" or "wrong" with no opportunity for revision',
                isGood: false,
            },
            {
                text: 'Collaborative critique sessions where ideas are refined',
                isGood: true,
            },
            {
                text: 'Students afraid to share ideas for fear of being incorrect',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Theory Refinement',
                description: 'Students draft initial explanations for why leaves change color in fall. Through class discussion and research, they collaboratively critique and improve each other\'s theories, building on insights and addressing weaknesses without judgment.',
            },
        ],
        relatedPrinciples: ['1', '3', '11'],
    },
    {
        id: '3',
        title: 'Idea Diversity',
        shortDescription: 'Idea diversity is essential to the development of knowledge.',
        fullDescription: 'To understand an idea is to understand the ideas that surround it, including those that stand in contrast to it. Idea diversity creates a rich environment for ideas to evolve into new and more refined forms.',
        icon: '🌈',
        category: 'Idea Generation',
        askYourself: [
            'Are students encouraged to generate multiple perspectives on the same problem?',
            'Is diversity of ideas valued, even when ideas seem unconventional?',
            'Do students engage with contrasting viewpoints to deepen understanding?',
        ],
        whatDoesItLookLike: [
            {
                text: 'Brainstorming sessions that welcome all ideas, including unconventional ones',
                isGood: true,
            },
            {
                text: 'Only accepting ideas that match the textbook explanation',
                isGood: false,
            },
            {
                text: 'Comparing multiple theories to understand different perspectives',
                isGood: true,
            },
            {
                text: 'Dismissing ideas that don\'t fit the expected answer',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Sustainable City Design',
                description: 'When designing a sustainable city, students generate diverse proposals: some focus on renewable energy, others on public transportation, green spaces, or waste reduction. The diversity of approaches enriches the collective understanding of sustainability.',
            },
        ],
        relatedPrinciples: ['2', '4', '11'],
    },
    {
        id: '4',
        title: 'Rise Above',
        shortDescription: 'Creative synthesis of ideas.',
        fullDescription: 'Means working with diverse ideas, finding connections, and synthesizing them into a more inclusive and higher-level understanding. It is about moving beyond the trivial to the profound.',
        icon: '🚀',
        category: 'Advancement',
        askYourself: [
            'Are students synthesizing diverse ideas into higher-level concepts?',
            'Do students move beyond listing facts to creating new insights?',
            'Are students developing more inclusive principles that connect multiple ideas?',
        ],
        whatDoesItLookLike: [
            {
                text: 'Creating a comprehensive theory that integrates multiple perspectives',
                isGood: true,
            },
            {
                text: 'Simply listing different ideas without connecting them',
                isGood: false,
            },
            {
                text: 'Developing new principles that transcend individual observations',
                isGood: true,
            },
            {
                text: 'Focusing only on surface-level details',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Energy Policy Synthesis',
                description: 'After researching various renewable energy sources, students don\'t just list them. They develop a comprehensive community energy policy that integrates solar, wind, and conservation strategies, addressing economic, environmental, and social dimensions.',
            },
        ],
        relatedPrinciples: ['3', '10', '11'],
    },
    {
        id: '5',
        title: 'Epistemic Agency',
        shortDescription: 'Learners take charge of their own knowledge advancement.',
        fullDescription: 'Participants set forth their own ideas and negotiate a fit between their personal ideas and the ideas of others, using contrasts to spark and sustain knowledge advancement rather than depending on others to chart that course for them.',
        icon: '🧠',
        category: 'Community',
        askYourself: [
            'Do students take responsibility for their own learning goals?',
            'Are students making decisions about what to investigate and how?',
            'Do students actively negotiate between their ideas and others\' ideas?',
        ],
        whatDoesItLookLike: [
            {
                text: 'Students deciding on their own research directions',
                isGood: true,
            },
            {
                text: 'Teacher prescribing exactly what and how to learn',
                isGood: false,
            },
            {
                text: 'Students evaluating their own progress and setting next steps',
                isGood: true,
            },
            {
                text: 'Students waiting for teacher approval before proceeding',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Self-Directed Research',
                description: 'In a history project, students don\'t wait for the teacher to assign topics. They identify their own questions about local history, decide which sources to consult, how to organize findings, and how to present their discoveries.',
            },
        ],
        relatedPrinciples: ['1', '6', '11'],
    },
    {
        id: '6',
        title: 'Community Knowledge',
        shortDescription: 'Collective responsibility for community knowledge.',
        fullDescription: 'The goal is to advance the knowledge of the community, not just individual knowledge. Members contribute to a shared public space of knowledge, which becomes a resource for the whole community.',
        icon: '🤝',
        category: 'Community',
        askYourself: [
            'Are students contributing to shared knowledge resources?',
            'Is collective advancement valued as much as individual achievement?',
            'Do students see themselves as building knowledge for the whole community?',
        ],
        whatDoesItLookLike: [
            {
                text: 'Creating a shared class wiki that everyone contributes to',
                isGood: true,
            },
            {
                text: 'Individual projects kept private and not shared',
                isGood: false,
            },
            {
                text: 'Students building on each other\'s work publicly',
                isGood: true,
            },
            {
                text: 'Competition between students for the best individual grade',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Community History Encyclopedia',
                description: 'The class collaborates to build a shared online encyclopedia of local history. Each student contributes entries, but also refines and connects others\' work, creating a collective resource that benefits the whole community.',
            },
        ],
        relatedPrinciples: ['5', '7', '8'],
    },
    {
        id: '7',
        title: 'Democratizing Knowledge',
        shortDescription: 'All participants are legitimate contributors.',
        fullDescription: 'All participants are empowered to engage in knowledge building. Diversity is not just tolerated but viewed as a strength. There is a sense of shared purpose and a commitment to the advancement of knowledge for the common good.',
        icon: '🌍',
        category: 'Community',
        askYourself: [
            'Are all students recognized as legitimate contributors to knowledge?',
            'Is diversity of background and perspective valued as a strength?',
            'Do all voices have equal opportunity to contribute?',
        ],
        whatDoesItLookLike: [
            {
                text: 'All students\' ideas are given equal consideration',
                isGood: true,
            },
            {
                text: 'Only "high achievers" are taken seriously',
                isGood: false,
            },
            {
                text: 'A quiet student\'s insight is valued as much as an outspoken student\'s',
                isGood: true,
            },
            {
                text: 'Dismissing contributions from certain students',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Inclusive Discussion Culture',
                description: 'In a class discussion on climate change, a typically quiet student asks an insightful question about local impacts. The teacher and peers give it the same weight as more complex theories from outspoken students, recognizing all as legitimate contributors.',
            },
        ],
        relatedPrinciples: ['6', '8', '3'],
    },
    {
        id: '8',
        title: 'Symmetric Knowledge Advancement',
        shortDescription: 'Expertise is distributed within and between communities.',
        fullDescription: 'Symmetry in knowledge advancement means that to give knowledge is to get knowledge. The goal is to advance the knowledge of others as well as one\'s own.',
        icon: '⚖️',
        category: 'Community',
        askYourself: [
            'Do students learn by teaching others?',
            'Is expertise distributed rather than concentrated in a few individuals?',
            'Do students advance others\' knowledge as much as their own?',
        ],
        whatDoesItLookLike: [
            {
                text: 'Students teaching peers and deepening their own understanding',
                isGood: true,
            },
            {
                text: 'Only the teacher as the sole knowledge provider',
                isGood: false,
            },
            {
                text: 'Peer explanations that benefit both explainer and listener',
                isGood: true,
            },
            {
                text: 'Students hoarding knowledge to maintain competitive advantage',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Peer Teaching Sessions',
                description: 'Students become experts on different aspects of ecosystems and teach small groups. Through explaining and answering questions, both teachers and learners deepen their understanding, demonstrating that giving knowledge leads to gaining knowledge.',
            },
        ],
        relatedPrinciples: ['6', '7', '11'],
    },
    {
        id: '9',
        title: 'Pervasive Knowledge Building',
        shortDescription: 'Knowledge building is not confined to school.',
        fullDescription: 'Knowledge building is not an add-on but is central to all work. It pervades mental life, in and out of school.',
        icon: '🌐',
        category: 'Advancement',
        askYourself: [
            'Do students see connections between school learning and life outside school?',
            'Is knowledge building integrated across all subjects and activities?',
            'Are students encouraged to continue inquiry beyond the classroom?',
        ],
        whatDoesItLookLike: [
            {
                text: 'Students connecting science lessons to observations in nature',
                isGood: true,
            },
            {
                text: 'Learning confined to textbook exercises during class time',
                isGood: false,
            },
            {
                text: 'Inquiry that extends beyond the school day',
                isGood: true,
            },
            {
                text: 'Knowledge treated as relevant only for tests',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Extended Ecosystem Study',
                description: 'Students studying ecosystems in class are encouraged to observe and document ecosystems in their backyards, parks, and neighborhoods. Their out-of-school observations enrich class discussions and deepen understanding.',
            },
        ],
        relatedPrinciples: ['1', '10', '5'],
    },
    {
        id: '10',
        title: 'Constructive Uses of Authoritative Sources',
        shortDescription: 'Using sources to refine ideas, not just to find answers.',
        fullDescription: 'To know a discipline is to be in touch with the present state and growing edge of knowledge in the field. This requires respect for authoritative sources, combined with a critical stance and a willingness to question and improve upon them.',
        icon: '📚',
        category: 'Advancement',
        askYourself: [
            'Are students using authoritative sources to refine their own ideas?',
            'Do students critically analyze sources rather than accepting them at face value?',
            'Are students engaging with the current state and frontier of knowledge?',
        ],
        whatDoesItLookLike: [
            {
                text: 'Analyzing primary sources to form original interpretations',
                isGood: true,
            },
            {
                text: 'Copying information from sources without questioning',
                isGood: false,
            },
            {
                text: 'Using expert knowledge to push thinking further',
                isGood: true,
            },
            {
                text: 'Treating textbooks as the final word',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Critical Historical Analysis',
                description: 'When researching a historical event, students analyze both primary and secondary sources, identify potential biases, compare different historian perspectives, and synthesize their own informed interpretation rather than accepting a single account.',
            },
        ],
        relatedPrinciples: ['1', '4', '11'],
    },
    {
        id: '11',
        title: 'Knowledge Building Discourse',
        shortDescription: 'Discourse that results in more than the sharing of knowledge.',
        fullDescription: 'The discourse of knowledge building results in the creation of new knowledge and the improvement of ideas. It is more than just sharing information; it is about transforming it.',
        icon: '💬',
        category: 'Advancement',
        askYourself: [
            'Do discussions lead to new insights and transformed understanding?',
            'Are students building on and connecting each other\'s ideas?',
            'Is discourse aimed at improving ideas rather than just sharing them?',
        ],
        whatDoesItLookLike: [
            {
                text: 'Students building on each other\'s ideas in online discussions',
                isGood: true,
            },
            {
                text: 'Students simply taking turns presenting isolated facts',
                isGood: false,
            },
            {
                text: 'Dialogue that leads to new collective understanding',
                isGood: true,
            },
            {
                text: 'Information exchange without deeper engagement',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Knowledge Forum Discussion',
                description: 'Students use Knowledge Forum to post notes with their theories and questions. Others build on these notes, critique them, and connect ideas, creating an ongoing dialogue where collective understanding evolves beyond what any individual contributed.',
            },
        ],
        relatedPrinciples: ['2', '3', '4'],
    },
    {
        id: '12',
        title: 'Embedded Transformative Assessment',
        shortDescription: 'Assessment is an integral part of the effort to advance knowledge.',
        fullDescription: 'Assessment is used to identify problems as the work proceeds and is embedded in the day-to-day workings of the organization. It is not a separate activity but is integral to the knowledge building process.',
        icon: '🧭',
        category: 'Assessment',
        askYourself: [
            'Is assessment embedded in daily learning rather than separate events?',
            'Do students use assessment to identify problems and drive improvement?',
            'Are students involved in self-assessment and community-based evaluation?',
        ],
        whatDoesItLookLike: [
            {
                text: 'Students regularly reflecting on their progress and adjusting approach',
                isGood: true,
            },
            {
                text: 'Assessment only happening during final exams',
                isGood: false,
            },
            {
                text: 'Using ongoing feedback to improve work continuously',
                isGood: true,
            },
            {
                text: 'Waiting until the end of a unit to find out how you did',
                isGood: false,
            },
        ],
        classroomExamples: [
            {
                title: 'Ongoing Project Reflection',
                description: 'Throughout their research project, students regularly assess their own progress, identify areas where understanding is weak, and collectively decide how to adjust their inquiry methods. Assessment drives learning rather than just measuring it.',
            },
        ],
        relatedPrinciples: ['5', '11', '2'],
    },
];
