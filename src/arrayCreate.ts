export function arrayCreate<T>(n: number, fn: (i: number) => T): T[] {
	const a = [];
	for (let i = 0; i < n; i++) {
		a.push(fn(i));
	}
	return a;
}
