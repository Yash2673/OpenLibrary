export const request = (book,profile) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore=getFirestore();
        firestore.collection('request').add({
            ...book,
            firstName : profile.firstName,
            lastName : profile.lastName,
            timestamp : new Date()
        }).then(()=>{
            dispatch({type:'Book_Requested'})
        }).catch((err)=>{
            dispatch({type:'Book_Request_Unsuccessful',err:err})
        })
        
    }
}

export const create =(book) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('books').add({
            ...book,
            timestamp:new Date()
        }).then(()=>{
            dispatch({type:'Book_Added',book:book})
        }).catch((err)=>{
            dispatch({type:'Book_Error',err:err})
        })
    }
}

export const count = (item) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('counter').doc(item.id).set({
            ...item,
            count : item.count+1
        }).then(()=>{
            dispatch({type:'Count_Updated'})
        }).catch(err=> {
            dispatch({type:'Count_Error',err:err})
        })
    }
} 