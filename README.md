### How to use:

- import matter js into your project
```
import {
	Engine, Runner, Render, Mouse, MouseConstraint,
	World, Composite, Composites, Bodies, Body, Events
} from 'matter-js'
```

- import matterjs-boilerplate
```
import { matterBoilerplate } from './MatterBoilerplate'
```

- start a matterjs project after one line, de-structuring the constants/variables that we'll need access to in our main project file
```
let { engine, render, runner, world } = matterBoilerplate()
```

- now, you can start adding your physics bodies!
