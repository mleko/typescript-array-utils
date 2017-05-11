const identityCompare = <T>(a: T, b: T): boolean => {
	return a === b;
};

export function unique<T>(arr: T[], compare: (a: T, b: T) => boolean = identityCompare): T[] {
	return arr.filter((e, index) => {
		return index === arr.findIndex((v) => {
			return compare(e, v);
		});
	});
}
