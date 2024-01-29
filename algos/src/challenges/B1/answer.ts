/**
 * In this challenge, you must sort messages chronologically (oldest to latest) based on
 * their sentAt prop. If some messages have the same sentAt, then they should be
 * sorted by their content length (shortest first)
 *
 * @param messages Unsorted list of messages
 * @returns Sorted list of messages
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ messages }: { messages: Message[] }): Message[] {

  return messages.sort((a, b): any => {
    if (a.sentAt === b.sentAt) {
      return a.content.length - b.content.length
    }
    return a.sentAt.localeCompare(b.sentAt)
  })
}
// return messages.sort((a, b): any => {
//   if (a.sentAt < b.sentAt) {
//     return -1;
//   } else if (a.sentAt > b.sentAt) {
//     return 1;
//   }
//   if (a.sentAt === b.sentAt) {
//     if(a.content.length < b.content.length)
//     return -1
//   }
// });



// used interfaces, do not touch
export interface Message {
  content: string;
  sentBy: string;
  sentAt: string;
}
