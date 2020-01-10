//we want to break this into multiple Reducers as this is complex object and we don't want to handle all request at one place , one handle expense and one handle filters


//Expenses Reducer
const expenseReducerDefaultState = [];

export default (state = expenseReducerDefaultState, action ) => {
    switch(action.type){
        case 'ADD_EXPENSE' :
        return [...state,action.expense];
        case 'REMOVE_EXPENSE' :
        return state.filter(({id})=>{ //filter doesn't change existing , if condition inside is true, then it will keep it , 
            return id !==action.id;
        });
        case 'EDIT_EXPENSE':
        return state.map((exp)=>{
            if(exp.id=== action.id)
            {
                return {
                    ...exp,
                    ...action.updates
                }
            }else
            {
                return exp;
            }
        })
        default:
        return state;
    }

};