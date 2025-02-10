import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
    id: "finance-ai",
    name: "Finance-AI",
    retryFunction: async (attempt) => ({
        delay: Math.pow(2, attempt) * 1000,
        maxAttempts: 2,
    })
 });
