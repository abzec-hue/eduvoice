export const templates = [
    {
        id: 1,
        name: "Academic Essay",
        category: "Education", 
        content: `Introduction:

[Your introduction paragraph here]

Main Body:

Paragraph 1: [First main point]
Paragraph 2: [Second main point]
Paragraph 3: [Third main point]

Conclusion:

[Summarize main points]`
    },
    {
        id: 2,
        name: "Casual conversation",
        category: "Professional",
        content: `Conversation:

Hi ,

[Main contents]`
    },
    {
        id: 3, 
        name: "Meeting Notes",
        category: "Professional",
        content: `Meeting:

Date: [Date]
Attendees: [Names]

Purpose of meeting: [Purpose]

Discussion Points:
- Point 1: [Details]
- Point 2: [Details]
- Point 3: [Details]`
    }
];

export function getAllTemplates() {
    return templates;
}