export function predict(event) {
  
    event.preventDefault()
  
    var requestOptions = {
      method: 'POST',
      body: new FormData(event.target),
      redirect: 'follow'
    }

    console.log(requestOptions)
  
    // document.getElementById('form').classList.toggle('hide')
    // document.getElementById('predicting').classList.toggle('hide')
  
    // fetch("https://mousemapp.azurewebsites.net/api/predict?code=72zqkChgmomeOZmmwH_-wT1fg6nxykamnJTExzALnKccAzFufDWatg==", requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
  
    //     const resultScore = document.getElementById('result-score')
  
    //     resultScore.textContent = result.bcs
    //     resultScore.classList.remove(...resultScore.classList)
    //     resultScore.classList.add(`grade-${result.bcs}`)
  
    //     document.getElementById('result-name').textContent = result.name
    //     document.getElementById('result-room').textContent = result.room
    //     document.getElementById('result-cage').textContent = result.cage
    //     document.getElementById('result-mouseID').textContent = result.mouseID
    //     document.getElementById('result-file').textContent = result.files[0].filename
  
    //     document.getElementById('predicting').classList.toggle('hide')
    //     document.getElementById('result').classList.toggle('hide')
    //   })
    //   .catch(error => Sentry.captureException(error))
  }