# Changelog

## Unreleased

- Ship the repository as an Omarchy shell plugin (`io.github.danieljohnmorris.matrix-squid`): a service starts a fullscreen WebKitGTK screensaver per monitor at the `idle.screensaver` deadline, honours stay awake, the screensaver toggle and lock, exits on input, and adds `omarchy-shell matrix-squid launch`. `?screensaver` hides controls and the cursor and disables orbiting; metal textures resolve against the build base.

- Darken the procedural clouds to subtle charcoal and separate their colour from black distance extinction, preventing far squid from becoming bright grey cut-outs; refresh the README image to match.
- Refresh the README hero with longer tentacles, current monochrome haze, deployed sensors and a closer swimmer; warm its curved trail before capture instead of showing the straight initial history.
- Add staggered camera-facing approach/retreat destinations alongside free roaming, with perspective-aware framing, varied starting headings and vertical return arcs in portrait layouts; retain avoidance and broad-turn limits.
- Replace near-black extinction with grey depth haze and a slowly drifting procedural monochrome backdrop, preserving Sentinel materials and scene lighting.
- Lengthen main tentacles by 50% and increase their segments from 56 to 84, retaining detail spacing and extending trail-collision sampling.
- Replace closed patrol loops with independent changing 3D destinations, distance-based retargeting and gradual world-space boundary steering; retain collision avoidance, broad turns and world-space tentacle trails.
- Scale the swarm from four squid on phones to sixteen on large screens, widening roaming space for ultrawide aspect ratios and updating population on resize/fullscreen without resetting existing swimmers.
- Apply the shared metal finish to dynamically added squid and dispose removed procedural resources without changing scene lighting, fog or materials.
- Give tentacle vertebrae, collars, joint caps and claws dedicated dark-gunmetal materials instead of sharing bright head hardware; preserve lighting, fog and red running-light intensity.
- Rename the project and repository to `matrix-squid`, serve it at `matrix-squid.danieljohnmorris.com`, and permanently redirect the previous plural host from the container.
- Add a README screenshot of deployed sensor dishes and probes beside a closer coasting Sentinel and distant patrol, using the live scene's lighting, metal materials and grey depth fog.
- Rebuild the six underside manipulators as folded, flattened linkages with hinge barrels, parallel actuators and hooked pincers; replace continuous dangling motion with staggered, eased reaches.
- Explicitly match the singular nginx host and make it the default server, avoiding a self-redirect after the rename.

- Replace text controls with stateful pause/play and fullscreen icons plus the GitHub logo, retaining accessible labels, tooltips and 44px targets.
- Add vgpu-baked brushed-metal roughness and normal maps, neutral reflection lighting and tone mapping; preserve dark gunmetal between lit highlights.
- Keep tentacle running lights as subdued red accents, dimmer than the optical lenses.
- Add spaced emissive red windows along all fifteen tentacles, attached to their simulated segments rather than a separate animation.
- Animate the jaw manipulators independently of the main tentacle propulsion and sensing poses.
- Soften distal tentacle springs during swimming and sensing, and propagate propulsion opening/contraction from root to tip without resetting particle velocity.
- Group Pause/Resume, Fullscreen and the public GitHub link in one responsive top-right control cluster.
- Publish as `danieljohnmorris/matrix-squids`, with a Node-to-nginx container build for `matrix-squids.danieljohnmorris.com`.

- Sculpt the head as a broad, low crown with full cheek casings, raised optical brows, a recessed muzzle, curved cheek ribs and fifteen individually collared arm sockets; keep the emissive red lenses exposed ahead of their outer fairings.
- Replace uniform trailing cables with fifteen longer 56-segment mechanical tentacles of varied length and curvature, heavier vertebrae, paired hinge caps and articulated grippers.
- Keep world-space tentacle inertia and all three poses; derive trail sampling and segment stretch limits from the remodelled arm dimensions.
- Batch rigid geometry by material and instance articulated detail, including deployed sensors and running lights, to keep each Sentinel to 24 draw calls.
- Animate all six jaw manipulators independently while coasting, with fixed shoulders, rigid arm lengths and moving wrists and pincers; keep them separate from the rigid head batch.
- Keep coasting and propulsion on one transported swimming trail with a single critically damped spring law; opening and contraction no longer switch between world-space and body-space target shapes or change spring stiffness.
- Unfold two dish receivers and a smaller probe from tentacle tips only while sensing; retract them during coasting and propulsion, retaining world-space tentacle inertia.

- Use pose-sized capsules along both swimmers' curved trails for avoidance and braking instead of full-length bounding spheres that stopped otherwise-clear coasting.
- Double the roaming dimensions, widen the camera view and zoom range, and add fullscreen entry/exit.
- Separate initial positions across depth and add distance fog with a closer perspective camera to distinguish near and far swimmers.
- Extend roaming toward the camera with a foreground spawn, add charcoal-grey exponential depth haze, and lengthen swimming to 65 seconds before a 10-second sensing stop.
- Preserve orientation through swimming turns to avoid fixed-axis roll flips, and reduce normal and avoidance turning rates.
- Bound ordinary swimming curvature to an eight-unit minimum turn radius, widen roaming space and begin avoidance earlier; slower travel no longer produces tighter turns.
- Add world-space spring inertia, drag and segment stretch limits to tentacles; orient claws along the final segment so tips trail through turns.
- Give foreground and distant sentinels world-space depth targets; camera orbit and zoom do not move their destinations.
- Strengthen the foreground/background composition with a 6–9-unit close pass, diagonal framing and lighter charcoal haze to retain distant silhouettes.
- Replace forced guided positions with forward swimming and shared avoidance, preventing sideways sliding while the body turns toward its destination.
- Restore sensing and propulsion speed bursts for guided swimmers and stagger sensing phases across the swarm.
- Reduce sensing to a four-second stop after 90 seconds of swimming, with two-second braking and departure transitions.
- Keep 30-second propulsion cycles, with 22.8 seconds of coasting, a 3.2-second opening and a two-second contraction; accelerate during the latter part of contraction, then shed the burst smoothly.

- Replace repeating paths with changing 3D destinations, bounded-rate steering and distance-sampled movement history for trailing tentacles.
- Add a temporary speed burst as sensing limbs contract into coasting, preserving a complete stop during sensing.
- Use equal physical squid sizes; apparent size now varies with perspective only.

## 1.0.0

- Independent Vite/Three.js squid mini-site with full-screen rendering and no article overlay.
- Curved 3D swimming, trailing articulated tentacles, contraction-driven bursts and 16-second stationary look-around phases.
- Drag-to-orbit, scroll/pinch-to-zoom, pause/resume, reduced-motion support and hidden-tab suspension.

Run `npm ci` then `npm run dev`. Run `npm test` for coasting, turn-radius, curved-trail transition, sensing/propulsion inertia and optical-lens visibility regressions. Build static deployment files with `npm run build`; output is `dist/`. The Dockerfile serves the production build on port 80.

Run `npm run bake:metal` on a WebGPU-capable development machine to regenerate the checked-in textures from `scripts/metal.wgsl` using vgpu. Normal builds and browsers use the baked PNGs and do not require WebGPU.
