import {
	Engine, Runner, Render, Mouse, MouseConstraint,
	World, Composite, Composites, Bodies, Body, Events
} from 'matter-js'
import * as PIXI from 'pixi.js'
import random from 'random'
import { width, height } from './config'
import { matterBoilerplate } from './MatterBoilerplate'
import './style.scss'


window.start = () => {

    let { engine, render, runner, world } = matterBoilerplate(width, height)

		let ground = Bodies.rectangle(width/2, height, width, 100, {isStatic:true})
		// let box = Bodies.rectangle(100, -300, 50, 50)
		// let stack = Composites.stack(100, 0, 20, 10, 0, 0, (x, y) => {
		// 	return Bodies.rectangle(x, y, 30, 30)
		// })

		let boxW = 30
		let _boxes = [
			[1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1],
		]
		let boxes = []
		for (let i = 0; i < _boxes.length; ++i) {
			for (let j = 0; j < _boxes[i].length; ++j) {
				_boxes[i][j] = Bodies.rectangle(i*boxW+250, j*boxW, boxW, boxW)
				// World.add(world, boxes[i][j])
				boxes.push(_boxes[i][j])
			}
		}
		console.log(boxes)


		World.add(world, [ground])
		World.add(world, boxes)


		document.addEventListener('click', e => {
			boxes.forEach(body => {
				Body.applyForce(body, body.position, { x: random.int(-5, 5) * .02, y: -.075 })
			})
		})

		Events.on(engine, 'beforeTick', e => {

			boxes.forEach(box => {
				if (box.position.x > width - 100 || box.position.x < 100) {
					World.remove(world, box)
				}
			})

		})

}
