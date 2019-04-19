import React, { Component } from 'react';
import { createStore } from 'redux';


class ReduxDemo extends Component {
    render() {

        //Step 2: Reducer: State and Action;
         const reducer = function (state, action) {
            if (action.type === "ATTACK") {
                return action.payload
            }
            if (action.type === "GREENATTACK") {
                return action.payload
            }
            return state;
        }


        //Step 1 Store: reducer and state and is written in reducers folder
        const store = createStore(reducer, "Peace");

       
        //Step 3 : Subscribe 
        store.subscribe(() => {
            console.log("Store is now", store.getState());
        })

        //Step 4: Dispatch Action
        store.dispatch({ type: "Peace", payload: "Avengers" });
        store.dispatch({ type: "ATTACK", payload: "Iron Man" });
        store.dispatch({ type: "GREENATTACK", payload: "Hulk" });


        return (
            <div></div>
        );
    }
}
export default ReduxDemo;