# This repo contains examples of prototyping and JavaScript design patterns

# Demo1
In this example we extend prototypes by creating a new object of the parent and setting it as the prototype.
This does not seem to be the preferred method because the parent constructor is always called.

# Demo2
In this example we extend prototypes using Object.create, the benefit of this implementation is that only the methods are inherited.
The parent constructor can be called but this does not happen by default. The properties that get created within the constructor won't exist if the constructor is not called.
This gives more flexibility since not all properties need to be inherited.

# Demo3
This example is the same as the first only in the example a function is used to define the inheritance.

# Demo4
This example shows an implementation where only the parent functions are inherited. The parent constructor is never called.

# Demo5
This example shows how you can override functions and call the overridden parent function.

# Demo6
This example shows how you can create private methods within a prototype.

# Demo7
This example shows how you can create modules.