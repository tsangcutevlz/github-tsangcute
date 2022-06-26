
function logger(reducer){
    return (prevState, action) => {

        console.group(action.type)
        console.log('Prev State: ', prevState)
        console.log('Action: ', action)

        
        const newState = reducer(prevState, action);

        console.log('Next State: ', prevState)

        console.groupEnd();
        return newState
    };
}

export default logger