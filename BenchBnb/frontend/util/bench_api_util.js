/*
It should dispatch an $.ajax request and return a promise. 
As usual, the success function will be chained onto this promise in the thunk action creator. 
You may choose to define an error callback for debugging.
*/

export const fetchBenches = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/benches',
        error: (err) => console.log(err)
    })
}