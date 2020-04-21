export const playerMove = direction => {
	return { type: `MOVE_${direction}`, distance: 1 }
}
