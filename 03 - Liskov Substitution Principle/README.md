## Liskov Substitution Principle

Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.

## Bad implementation

- clean code ✅
- readable code ✅
- Liskov Principle principle ❌

The `showRectangleInfo()` function violates the Liskov substition principle because setting the width for a square will don't modify only the width but also the height due to the nature of square shape. The `Square` cannot be substituted in place of a `Rectangle`;

## Good implementation

- clean code ✅
- readable code ✅
- Liskov Principle ✅

The solution is to add a base class `Shape` that will be implemented by `Rectangle` and `Square` and the `showRectangleInfo()` will work now only with objects of type `Rectangle` and the Liskov substitution is not violated.
