export const playerReducer = (state = {
	position: { x: 0, y: 0 }
}, action) => {
	switch(action.type) {
		case "MOVE_UP":
			return { ...state, position: { ...state.position, y: state.position.y - action.distance } }
		case "MOVE_DOWN":
			return { ...state, position: { ...state.position, y: state.position.y + action.distance } }
		case "MOVE_RIGHT":
			return { ...state, position: { ...state.position, x: state.position.x + action.distance } }
		case "MOVE_LEFT":
			return { ...state, position: { ...state.position, x: state.position.x - action.distance } }
		default:
			return state;
	}
}
