export function replace<T>(a: T[], index: number, element: T): T[] {
	return [].concat(a.slice(0, index), element, a.slice(index + 1));
}
