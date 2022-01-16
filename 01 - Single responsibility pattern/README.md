## Single Responsability Pattern

A class should have one, and only one, reason to change.

## Bad implementation

- clean code ✅
- readable code ✅
- single responsibility pattern ❌

The "bad implementation" violates Single Responsibility Pattern, there at least two reason for change this class: track calories/log messages.

## Good implementation

- clean code ✅
- readable code ✅
- single responsibility pattern ✅

The CalorieTracker class has only one reason for change, the logging is implemented in other module
