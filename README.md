### How to use:

- import matter js into your project
```
import Matter from 'matter-js'
```

- import matterjs-boilerplate
```
import { matterBoilerplate } from './MatterBoilerplate'
```

- start a matterjs project after one line, de-structuring the constants/variables that we'll need access to in our main project file, passing in width and height parameters
```
let { engine, render, runner, world } =
matterBoilerplate(width [int], height [int])
```

- runs all the necessary setup of the engine, render, and runner and abstracts it away from the main file
- you can access these important variables via the line above ^^
- now, you can start adding your physics bodies!
```
let rectangle = Matter.Bodies.rectangle(0, 0, 100, 200)

World.add(world, body1)
```
