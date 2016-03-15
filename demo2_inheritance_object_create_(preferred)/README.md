# Demo2
In this example we extend prototypes using Object.create, the benefit of this implementation is that only the methods are inherited.
The parent constructor can be called but this does not happen by default. The properties that get created within the constructor won't exist if the constructor is not called.
This gives more flexibility since not all properties need to be inherited.