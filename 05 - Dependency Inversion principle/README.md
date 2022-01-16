## Dependency Inversion principle

High Level modules should not depend on Low Level modules. Both should depend upon abstractions. Abstractions should not depend upon details. Details should depend upon abstractions.

## Bad implementation

- clean code ✅
- readable code ✅
- Interface segregation principle ❌

Using low level `Revelout` implementation inside `Store constructor()` violates the principle.

## Good implementation

- clean code ✅
- readable code ✅
- Interface segregation principle ✅

Solution is to add specialized payment processor wrappers that contains same methods signatures and are used when `Store` is instantiated.
