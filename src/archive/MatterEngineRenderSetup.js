import { Engine, Render, Runner } from 'matter-js'
import { width, height } from './config'

export function setUpEngineRender() {
	// create engine
	var engine = Engine.create()
	var world = engine.world;

	// create renderer
	var render = Render.create({
			element: document.body,
			engine: engine,
			options: {
					width,
					height,
					showAngleIndicator: true,
					showCollisions: true,
					showVelocity: true
			}
	});

	Render.run(render);

	// create runner
	var runner = Runner.create();
	Runner.run(runner, engine);

	// fit the render viewport to the scene
	Render.lookAt(render, {
		min: { x: 0, y: 0 }, max: { x: width, y: height }
	})

	return {
		engine,
		render,
		runner,
		world
	}

}
