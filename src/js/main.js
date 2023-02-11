function updateLabel(event) {
  event.preventDefault()
  const fakePath = document.getElementById('file-input').value.split('\\')
  document.getElementById('file-label').textContent = fakePath[fakePath.length - 1]
}

function callPredict(event) {
  
  event.preventDefault()

  var requestOptions = {
    method: 'POST',
    body: new FormData(event.target),
    redirect: 'follow'
  }

  document.getElementById('form').classList.toggle('hide')
  document.getElementById('predicting').classList.toggle('hide')

  fetch("https://mousemapp.azurewebsites.net/api/predict?code=72zqkChgmomeOZmmwH_-wT1fg6nxykamnJTExzALnKccAzFufDWatg==", requestOptions)
    .then(response => response.json())
    .then(result => {

      const resultScore = document.getElementById('result-score')

      resultScore.textContent = result.bcs
      resultScore.classList.remove(...resultScore.classList)
      resultScore.classList.add(`grade-${result.bcs}`)

      document.getElementById('result-name').textContent = result.name
      document.getElementById('result-room').textContent = result.room
      document.getElementById('result-cage').textContent = result.cage
      document.getElementById('result-mouseID').textContent = result.mouseID
      document.getElementById('result-file').textContent = result.files[0].filename

      document.getElementById('predicting').classList.toggle('hide')
      document.getElementById('result').classList.toggle('hide')
    })
    .catch(error => Sentry.captureException(error))
}

function reset() {
  document.getElementById('file-label').textContent = 'Image'
  document.getElementById('form').reset()
  document.getElementById('form').classList.toggle('hide')
  document.getElementById('result').classList.toggle('hide')
}

(function () {
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.hero-title, .hero-paragraph, .submission-header, .submission-form', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 150
    })

    sr.reveal('.bubble-3, .bubble-4, .hero-browser-inner, .bubble-1, .bubble-2', {
      duration: 1000,
      scale: 0.95,
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 150
    })

    sr.reveal('.feature', {
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 100,
      origin: 'bottom',
      viewFactor: 0.5
    })
  }

  const form = document.getElementById('form')
  const files = document.getElementById('file-input')
  form.addEventListener('submit', callPredict)
  files.addEventListener('change', updateLabel)
}())
