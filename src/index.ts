/* It's a list of cities in Ukraine. */
import cities from './cities.json';

console.log("Stand With Ukraine! 🇺🇦")

function replaceCityNames(): void {
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    while (walk.nextNode()) {
        const { currentNode } = walk;
        if (currentNode.nodeType === Node.TEXT_NODE) {
            const text = currentNode.textContent;
            if (text) {
                let newText = text;
                for (const city of cities) {
                    const re = new RegExp(city.RUS, 'gi');
                    newText = newText.replace(re, city.UKR);
                }
                currentNode.textContent = newText;
            }
        }
    }
}

replaceCityNames();