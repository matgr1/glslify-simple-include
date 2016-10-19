import * as path from "path";
import * as GlslSimpleInclude from "glsl-simple-include";
import { read } from "read-text-file";

function transform(filename: string, src: string, opts: any, done: (err: any, data: string) => void): void
{
	let processPromise = GlslSimpleInclude.processIncludes(
		read,
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

export = transform;