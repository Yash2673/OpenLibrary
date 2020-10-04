const initState = {
}

export const BookReducer = (state=initState,action) => {
    if(action.type==='Book_Requested')
    {
        console.log('Book Requested Successfully');
        return state;
    }
    else if(action.type==='Book_Request_Unsuccessful')
    {
        console.log("Book request unsuccessful",action.err)
        return state;
    }
    else if(action.type==='Count_Updated')
    {
        console.log("Updated Count");
        return state;
    }
    else if(action.type==='Count_Error')
    {
        console.log("Count Error");
        return state;
    }
    return state;
}