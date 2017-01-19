export function without<T>(a: T[], index: number): T[] {
	return [].concat(a.slice(0, index), a.slice(index + 1));
}
