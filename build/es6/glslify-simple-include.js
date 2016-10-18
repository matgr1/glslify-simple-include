"use strict";
const path = require("path");
const GlslSimpleInclude = require("glsl-simple-include");
const read_text_file_1 = require("read-text-file");
function transform(filename, src, opts, done) {
    let processPromise = GlslSimpleInclude.processIncludes(read_text_file_1.readTextFile, path, filename, src);
    processPromise.then(function (script) {
        done(null, script);
    }, function (error) {
        if ((error !== null) && (error !== undefined)) {
            error = "failed to process includes";
        }
        done(error, null);
    });
}
module.exports = transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xzbGlmeS1zaW1wbGUtaW5jbHVkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbHNsaWZ5LXNpbXBsZS1pbmNsdWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUM3QixNQUFZLGlCQUFpQixXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFDekQsaUNBQTZCLGdCQUFnQixDQUFDLENBQUE7QUFFOUMsbUJBQW1CLFFBQWdCLEVBQUUsR0FBVyxFQUFFLElBQVMsRUFBRSxJQUFzQztJQUVsRyxJQUFJLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxlQUFlLENBQ3JELDZCQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixHQUFHLENBQUMsQ0FBQztJQUVOLGNBQWMsQ0FBQyxJQUFJLENBQ2xCLFVBQVUsTUFBTTtRQUVmLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEIsQ0FBQyxFQUNELFVBQVUsS0FBSztRQUVkLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQzlDLENBQUM7WUFDQSxLQUFLLEdBQUcsNEJBQTRCLENBQUM7UUFDdEMsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsaUJBQVMsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0ICogYXMgR2xzbFNpbXBsZUluY2x1ZGUgZnJvbSBcImdsc2wtc2ltcGxlLWluY2x1ZGVcIjtcbmltcG9ydCB7IHJlYWRUZXh0RmlsZSB9IGZyb20gXCJyZWFkLXRleHQtZmlsZVwiO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm0oZmlsZW5hbWU6IHN0cmluZywgc3JjOiBzdHJpbmcsIG9wdHM6IGFueSwgZG9uZTogKGVycjogYW55LCBkYXRhOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkXG57XG5cdGxldCBwcm9jZXNzUHJvbWlzZSA9IEdsc2xTaW1wbGVJbmNsdWRlLnByb2Nlc3NJbmNsdWRlcyhcblx0XHRyZWFkVGV4dEZpbGUsXG5cdFx0cGF0aCxcblx0XHRmaWxlbmFtZSxcblx0XHRzcmMpO1xuXG5cdHByb2Nlc3NQcm9taXNlLnRoZW4oXG5cdFx0ZnVuY3Rpb24gKHNjcmlwdClcblx0XHR7XG5cdFx0XHRkb25lKG51bGwsIHNjcmlwdCk7XG5cdFx0fSxcblx0XHRmdW5jdGlvbiAoZXJyb3IpXG5cdFx0e1xuXHRcdFx0aWYgKChlcnJvciAhPT0gbnVsbCkgJiYgKGVycm9yICE9PSB1bmRlZmluZWQpKVxuXHRcdFx0e1xuXHRcdFx0XHRlcnJvciA9IFwiZmFpbGVkIHRvIHByb2Nlc3MgaW5jbHVkZXNcIjtcblx0XHRcdH1cblxuXHRcdFx0ZG9uZShlcnJvciwgbnVsbCk7XG5cdFx0fSk7XG59XG5cbmV4cG9ydCA9IHRyYW5zZm9ybTsiXX0=