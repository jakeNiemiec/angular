'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
function hasLifecycleHook(name, obj) {
    var type = obj.constructor;
    if (!(type instanceof lang_1.Type))
        return false;
    return name in type.prototype;
}
exports.hasLifecycleHook = hasLifecycleHook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX3JlZmxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtcHVubnE2UHIudG1wL2FuZ3VsYXIyL3NyYy9hbHRfcm91dGVyL2xpZmVjeWNsZV9yZWZsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFtQiwwQkFBMEIsQ0FBQyxDQUFBO0FBRTlDLDBCQUFpQyxJQUFZLEVBQUUsR0FBVztJQUN4RCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQVksV0FBSSxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzFDLE1BQU0sQ0FBQyxJQUFJLElBQVMsSUFBSyxDQUFDLFNBQVMsQ0FBQztBQUN0QyxDQUFDO0FBSmUsd0JBQWdCLG1CQUkvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzTGlmZWN5Y2xlSG9vayhuYW1lOiBzdHJpbmcsIG9iajogT2JqZWN0KTogYm9vbGVhbiB7XG4gIGxldCB0eXBlID0gb2JqLmNvbnN0cnVjdG9yO1xuICBpZiAoISh0eXBlIGluc3RhbmNlb2YgVHlwZSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIG5hbWUgaW4oPGFueT50eXBlKS5wcm90b3R5cGU7XG59XG4iXX0=