export function convertMemoryLevelToText(memoryLevel: number) {
	if (memoryLevel === 0) return "Unused word";
	if (memoryLevel >= 1 && memoryLevel <= 25) return "New word";
	if (memoryLevel >= 26 && memoryLevel <= 50) return "Short term memory";
	if (memoryLevel >= 51 && memoryLevel <= 75) return "Medium term memory";
	if (memoryLevel >= 76 && memoryLevel <= 100) return "Long term memory";
}
