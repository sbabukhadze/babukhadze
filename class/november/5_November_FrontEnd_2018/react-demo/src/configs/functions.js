const fetchData = (props) => { 
    return fetch(props.url)
      .then(data => data.json())
      .then(data => {
          return data;
      })
      .catch(err => err.message)
}

export {fetchData}