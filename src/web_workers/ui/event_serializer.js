'use strict';"use strict";
var collection_1 = require('angular2/src/facade/collection');
var lang_1 = require('angular2/src/facade/lang');
var MOUSE_EVENT_PROPERTIES = [
    "altKey",
    "button",
    "clientX",
    "clientY",
    "metaKey",
    "movementX",
    "movementY",
    "offsetX",
    "offsetY",
    "region",
    "screenX",
    "screenY",
    "shiftKey"
];
var KEYBOARD_EVENT_PROPERTIES = [
    'altkey',
    'charCode',
    'code',
    'ctrlKey',
    'isComposing',
    'key',
    'keyCode',
    'location',
    'metaKey',
    'repeat',
    'shiftKey',
    'which'
];
var TRANSITION_EVENT_PROPERTIES = ['propertyName', 'elapsedTime', 'pseudoElement'];
var EVENT_PROPERTIES = ['type', 'bubbles', 'cancelable'];
var NODES_WITH_VALUE = new collection_1.Set(["input", "select", "option", "button", "li", "meter", "progress", "param", "textarea"]);
function serializeGenericEvent(e) {
    return serializeEvent(e, EVENT_PROPERTIES);
}
exports.serializeGenericEvent = serializeGenericEvent;
// TODO(jteplitz602): Allow users to specify the properties they need rather than always
// adding value and files #3374
function serializeEventWithTarget(e) {
    var serializedEvent = serializeEvent(e, EVENT_PROPERTIES);
    return addTarget(e, serializedEvent);
}
exports.serializeEventWithTarget = serializeEventWithTarget;
function serializeMouseEvent(e) {
    return serializeEvent(e, MOUSE_EVENT_PROPERTIES);
}
exports.serializeMouseEvent = serializeMouseEvent;
function serializeKeyboardEvent(e) {
    var serializedEvent = serializeEvent(e, KEYBOARD_EVENT_PROPERTIES);
    return addTarget(e, serializedEvent);
}
exports.serializeKeyboardEvent = serializeKeyboardEvent;
function serializeTransitionEvent(e) {
    var serializedEvent = serializeEvent(e, TRANSITION_EVENT_PROPERTIES);
    return addTarget(e, serializedEvent);
}
exports.serializeTransitionEvent = serializeTransitionEvent;
// TODO(jteplitz602): #3374. See above.
function addTarget(e, serializedEvent) {
    if (NODES_WITH_VALUE.has(e.target.tagName.toLowerCase())) {
        var target = e.target;
        serializedEvent['target'] = { 'value': target.value };
        if (lang_1.isPresent(target.files)) {
            serializedEvent['target']['files'] = target.files;
        }
    }
    return serializedEvent;
}
function serializeEvent(e, properties) {
    var serialized = {};
    for (var i = 0; i < properties.length; i++) {
        var prop = properties[i];
        serialized[prop] = e[prop];
    }
    return serialized;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRfc2VyaWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtcHVubnE2UHIudG1wL2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy91aS9ldmVudF9zZXJpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyQkFBa0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUNuRCxxQkFBd0IsMEJBQTBCLENBQUMsQ0FBQTtBQUVuRCxJQUFNLHNCQUFzQixHQUFHO0lBQzdCLFFBQVE7SUFDUixRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7Q0FDWCxDQUFDO0FBRUYsSUFBTSx5QkFBeUIsR0FBRztJQUNoQyxRQUFRO0lBQ1IsVUFBVTtJQUNWLE1BQU07SUFDTixTQUFTO0lBQ1QsYUFBYTtJQUNiLEtBQUs7SUFDTCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLE9BQU87Q0FDUixDQUFDO0FBRUYsSUFBTSwyQkFBMkIsR0FBRyxDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFFckYsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFM0QsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFHLENBQzVCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBRTdGLCtCQUFzQyxDQUFRO0lBQzVDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUZlLDZCQUFxQix3QkFFcEMsQ0FBQTtBQUVELHdGQUF3RjtBQUN4RiwrQkFBK0I7QUFDL0Isa0NBQXlDLENBQVE7SUFDL0MsSUFBSSxlQUFlLEdBQUcsY0FBYyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFELE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFIZSxnQ0FBd0IsMkJBR3ZDLENBQUE7QUFFRCw2QkFBb0MsQ0FBYTtJQUMvQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFGZSwyQkFBbUIsc0JBRWxDLENBQUE7QUFFRCxnQ0FBdUMsQ0FBZ0I7SUFDckQsSUFBSSxlQUFlLEdBQUcsY0FBYyxDQUFDLENBQUMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQ25FLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFIZSw4QkFBc0IseUJBR3JDLENBQUE7QUFFRCxrQ0FBeUMsQ0FBa0I7SUFDekQsSUFBSSxlQUFlLEdBQUcsY0FBYyxDQUFDLENBQUMsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFIZSxnQ0FBd0IsMkJBR3ZDLENBQUE7QUFFRCx1Q0FBdUM7QUFDdkMsbUJBQW1CLENBQVEsRUFBRSxlQUFxQztJQUNoRSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQWUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxNQUFNLEdBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDeEMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsQ0FBQyxnQkFBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEQsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsZUFBZSxDQUFDO0FBQ3pCLENBQUM7QUFFRCx3QkFBd0IsQ0FBTSxFQUFFLFVBQW9CO0lBQ2xELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNwQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZXR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuY29uc3QgTU9VU0VfRVZFTlRfUFJPUEVSVElFUyA9IFtcbiAgXCJhbHRLZXlcIixcbiAgXCJidXR0b25cIixcbiAgXCJjbGllbnRYXCIsXG4gIFwiY2xpZW50WVwiLFxuICBcIm1ldGFLZXlcIixcbiAgXCJtb3ZlbWVudFhcIixcbiAgXCJtb3ZlbWVudFlcIixcbiAgXCJvZmZzZXRYXCIsXG4gIFwib2Zmc2V0WVwiLFxuICBcInJlZ2lvblwiLFxuICBcInNjcmVlblhcIixcbiAgXCJzY3JlZW5ZXCIsXG4gIFwic2hpZnRLZXlcIlxuXTtcblxuY29uc3QgS0VZQk9BUkRfRVZFTlRfUFJPUEVSVElFUyA9IFtcbiAgJ2FsdGtleScsXG4gICdjaGFyQ29kZScsXG4gICdjb2RlJyxcbiAgJ2N0cmxLZXknLFxuICAnaXNDb21wb3NpbmcnLFxuICAna2V5JyxcbiAgJ2tleUNvZGUnLFxuICAnbG9jYXRpb24nLFxuICAnbWV0YUtleScsXG4gICdyZXBlYXQnLFxuICAnc2hpZnRLZXknLFxuICAnd2hpY2gnXG5dO1xuXG5jb25zdCBUUkFOU0lUSU9OX0VWRU5UX1BST1BFUlRJRVMgPSBbJ3Byb3BlcnR5TmFtZScsICdlbGFwc2VkVGltZScsICdwc2V1ZG9FbGVtZW50J107XG5cbmNvbnN0IEVWRU5UX1BST1BFUlRJRVMgPSBbJ3R5cGUnLCAnYnViYmxlcycsICdjYW5jZWxhYmxlJ107XG5cbmNvbnN0IE5PREVTX1dJVEhfVkFMVUUgPSBuZXcgU2V0KFxuICAgIFtcImlucHV0XCIsIFwic2VsZWN0XCIsIFwib3B0aW9uXCIsIFwiYnV0dG9uXCIsIFwibGlcIiwgXCJtZXRlclwiLCBcInByb2dyZXNzXCIsIFwicGFyYW1cIiwgXCJ0ZXh0YXJlYVwiXSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVHZW5lcmljRXZlbnQoZTogRXZlbnQpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gIHJldHVybiBzZXJpYWxpemVFdmVudChlLCBFVkVOVF9QUk9QRVJUSUVTKTtcbn1cblxuLy8gVE9ETyhqdGVwbGl0ejYwMik6IEFsbG93IHVzZXJzIHRvIHNwZWNpZnkgdGhlIHByb3BlcnRpZXMgdGhleSBuZWVkIHJhdGhlciB0aGFuIGFsd2F5c1xuLy8gYWRkaW5nIHZhbHVlIGFuZCBmaWxlcyAjMzM3NFxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUV2ZW50V2l0aFRhcmdldChlOiBFdmVudCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgdmFyIHNlcmlhbGl6ZWRFdmVudCA9IHNlcmlhbGl6ZUV2ZW50KGUsIEVWRU5UX1BST1BFUlRJRVMpO1xuICByZXR1cm4gYWRkVGFyZ2V0KGUsIHNlcmlhbGl6ZWRFdmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVNb3VzZUV2ZW50KGU6IE1vdXNlRXZlbnQpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gIHJldHVybiBzZXJpYWxpemVFdmVudChlLCBNT1VTRV9FVkVOVF9QUk9QRVJUSUVTKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUtleWJvYXJkRXZlbnQoZTogS2V5Ym9hcmRFdmVudCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgdmFyIHNlcmlhbGl6ZWRFdmVudCA9IHNlcmlhbGl6ZUV2ZW50KGUsIEtFWUJPQVJEX0VWRU5UX1BST1BFUlRJRVMpO1xuICByZXR1cm4gYWRkVGFyZ2V0KGUsIHNlcmlhbGl6ZWRFdmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVUcmFuc2l0aW9uRXZlbnQoZTogVHJhbnNpdGlvbkV2ZW50KToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICB2YXIgc2VyaWFsaXplZEV2ZW50ID0gc2VyaWFsaXplRXZlbnQoZSwgVFJBTlNJVElPTl9FVkVOVF9QUk9QRVJUSUVTKTtcbiAgcmV0dXJuIGFkZFRhcmdldChlLCBzZXJpYWxpemVkRXZlbnQpO1xufVxuXG4vLyBUT0RPKGp0ZXBsaXR6NjAyKTogIzMzNzQuIFNlZSBhYm92ZS5cbmZ1bmN0aW9uIGFkZFRhcmdldChlOiBFdmVudCwgc2VyaWFsaXplZEV2ZW50OiB7W2tleTogc3RyaW5nXTogYW55fSk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgaWYgKE5PREVTX1dJVEhfVkFMVUUuaGFzKCg8SFRNTEVsZW1lbnQ+ZS50YXJnZXQpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZS50YXJnZXQ7XG4gICAgc2VyaWFsaXplZEV2ZW50Wyd0YXJnZXQnXSA9IHsndmFsdWUnOiB0YXJnZXQudmFsdWV9O1xuICAgIGlmIChpc1ByZXNlbnQodGFyZ2V0LmZpbGVzKSkge1xuICAgICAgc2VyaWFsaXplZEV2ZW50Wyd0YXJnZXQnXVsnZmlsZXMnXSA9IHRhcmdldC5maWxlcztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlcmlhbGl6ZWRFdmVudDtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplRXZlbnQoZTogYW55LCBwcm9wZXJ0aWVzOiBzdHJpbmdbXSk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgdmFyIHNlcmlhbGl6ZWQgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByb3AgPSBwcm9wZXJ0aWVzW2ldO1xuICAgIHNlcmlhbGl6ZWRbcHJvcF0gPSBlW3Byb3BdO1xuICB9XG4gIHJldHVybiBzZXJpYWxpemVkO1xufVxuIl19