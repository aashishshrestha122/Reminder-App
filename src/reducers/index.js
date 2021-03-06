import { ADD_REMINDER, DELETE_REMINDER } from '../constant';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const removeById=(state = [], id)=>{
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('new reduced reminders', reminders);
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders);
            return reminders;
        default:
            return state;
    }
    
}
export default reminders;