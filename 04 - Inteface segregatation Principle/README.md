## Interface segregation principle

Clients should not be forced to depend upon interfaces that they do not use.(The interfaces must be clean and small and all the methods from the interface should be used by any class that implements the interface).

## Bad implementation

- clean code ✅
- readable code ✅
- Interface segregation principle ❌

The method `showFuelType()` that should be implemented by any type of car violates the principle.

## Good implementation

- clean code ✅
- readable code ✅
- Interface segregation principle ✅

A specific `FuelCar` class constructed in order to be inherited just be "fuel" specialized class.
