/**
 * Shortens a string of text by a given length and inserts ... at the end
 * @param {String} text Text string to shorten
 * @param {Number} maxLength Maximum length of text to consider. 200 by default.
 * @returns Shortened text
 */
export default function shortenText(text, maxLength = 200) {
    if (!text || typeof text !== "string") return null;
    if (text.length <= maxLength) return text;
    
    return (
        text.trim().split(" ").reduce((words, word) => {
                if (words.join(" ").length + word.length <= maxLength) words.push(word);
                return words;
            }, []).join(" ") + "..."
            
    );
}