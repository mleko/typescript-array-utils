import * as test from "tape";
import {arrayCreate} from "..";

test("Test const array creation", (t) => {
	const arr = arrayCreate(7, () => 7);
	t.equal(arr.length, 7);
	for (let i = 0; i < 7; i++) {
		t.equal(7, arr[i]);
	}

	t.end();
});

test("Test pow array creation", (t) => {
	const arr = arrayCreate(13, (n) => Math.pow(n, 2));
	t.equal(arr.length, 13);
	t.equal(arr[0], 0);
	t.equal(arr[1], 1);
	t.equal(arr[3], 9);
	t.equal(arr[12], 144);

	t.end();
});
