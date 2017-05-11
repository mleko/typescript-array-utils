import * as test from "tape";
import {replace} from "./replace";

test("Test element replacement", (t) => {
	const input = [{a: 0}, {a: 1}, {a: 2}];
	const element = {a: 3};
	const expected = [{a: 0}, element, {a: 2}];

	const actual = replace(input, 1, element);

	t.equals(input[1].a, 1);
	t.equals(input.length, 3);

	t.equals(actual.length, expected.length);
	t.equals(actual[1], element);

	t.end();
});
