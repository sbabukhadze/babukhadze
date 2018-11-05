
const fetchData = (state) => {
    fetch(state.url)
        .then(data => data.json())
        .then(data => {
            return {data}
        })
        .catch(err => err.message)
}


export  {fetchData}
