import {unique} from "typescript-array-utils";

const a = unique([1, 2, 3, 1, 2]);

if (a.length !== 3) {
	throw "Unique failed";
}
