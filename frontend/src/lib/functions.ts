export function formatText(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // **bold** -> <strong>bold</strong>
    .replace(/\*(.*?)\*/g, "<em>$1</em>"); // *italic* -> <em>italic</em>
}
