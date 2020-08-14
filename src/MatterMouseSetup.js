import { Mouse, MouseConstraint, World } from 'matter-js'

export function setUpMouseConstraint(world, engine, render) {
	// add mouse control
	var mouse = Mouse.create(render.canvas),
			mouseConstraint = MouseConstraint.create(engine, {
					mouse: mouse,
					constraint: {
							stiffness: 0.2,
							render: {
									visible: false
							}
					}
			});

	World.add(world, mouseConstraint);

	// keep the mouse in sync with rendering
	render.mouse = mouse;

	return mouse
}
