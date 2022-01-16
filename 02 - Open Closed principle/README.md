## Open/Closed principle

Software components should be closed for modification, but open for extension

## Bad implementation

- clean code ✅
- readable code ✅
- Open/Closed principle ❌

The "bad implementation" violates Open/Closed principle, the implementation is not closed for modification because if we want to add a new shape then some modifications must be added in the switch statement.

## Good implementation

- clean code ✅
- readable code ✅
- Open/Closed principle ✅

The `drawShapes()` function is closed for modification, but if a new type of shape will be the added the function will correctly draw this new shape type. (e.g. Text).
