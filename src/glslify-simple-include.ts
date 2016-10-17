declare let require: any;
require("babel-polyfill");

import * as path from "path";
import * as GlslSimpleInclude from "glsl-simple-include";
import { readTextFile } from "read-text-file";

export type completionCallback = (err: any, data: string) => void;

export function transform(filename: string, src: string, opts: any, done: completionCallback): void
{
	let processPromise = GlslSimpleInclude.processIncludes(
		readTextFile,
		path,
		filename,
		src);

	processPromise.then(
		function (script)
		{
			done(null, script);
		},
		function (error)
		{
			if ((error !== null) && (error !== undefined))
			{
				error = "failed to process includes";
			}

			done(error, null);
		});
}