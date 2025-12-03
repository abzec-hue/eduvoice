
export const templates = [
    {
        id: 1,
        name: "Quick Question to Teacher",
        category: "Classroom",
        content: `Hi [Teacher's Name], Could you please explain [topic] again? `
    },
    {
        id: 2,
        name: "Group Work Suggestion",
        category: "Classroom",
        content: `I think we should focus on [idea]. I can help with [task] if that works.`
    },
    {
        id: 3,
        name: "Asking for Help",
        category: "Classroom",
        content: `I need help with [topic/subject]. Could someone explain it in a different way?`
    },
    {
        id: 4,
        name: "Quick Answer",
        category: "Classroom",
        content: `I think the answer is [your answer].`
    },
    {
        id: 5,
        name: "Peer Feedback",
        category: "Classroom",
        content: `I liked how you [feedback]. One suggestion: maybe try [suggestion].`
    },
    {
        id: 6,
        name: "Science Lab Report",
        category: "Science",
        content: `Aim: To investigate [what you're testing]\nMethod: We used [equipment] to measure [what you measured]\nResults: [Your results will go here]`
    },
    {
        id: 7,
        name: "Book Report",
        category: "English",
        content: `Book: [Book Title]\nMain Character: [Character Name]\nWhat happened: [Brief summary]\nMy favorite part: [Describe favorite part]`
    },
    {
        id: 8,
        name: "Math Problem",
        category: "Math",
        content: `To solve this problem, first I [first step]. Then I [next step]. The answer is [your answer] because [reason].`
    },
    {
        id: 9,
        name: "Presentation Opening",
        category: "Work",
        content: `Hello everyone, today I'm going to talk about [topic]. First, I'll explain [main point 1], then [main point 2].`
    },
    {
        id: 10,
        name: "Homework Question",
        category: "Work",
        content: `I'm stuck on question [number] about [topic]. I've tried [what you tried] but I'm not sure about the next step.`
    }
];

export function getAllTemplates() {
    return templates;
}
