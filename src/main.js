import './style.css'
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";
import { form, predict } from './js/form'
import { results } from './js/results';
import { bcs, images } from './js/guide'
import mice from './images/mice.png'

document.querySelector('#app').innerHTML = `
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500">
    <div class="h-screen relative isolate pt-12 px-6 sm:pt-16 lg:px-8 bg-cover bg-center" style="background-image:url('${mice}')">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-10">Mouse MApp – Body Condition Scoring</h2>
        <h4 class="text-2xl tracking-tight text-white sm:text-4xl">An image classifier for the assessment of body condition (BCS) in mice</h4>
      </div>
      <div id="content" class="mx-auto max-w-4xl rounded-none rounded-t-lg bg-white p-10 mt-10 drop-shadow-lg">
        <div id="bcsForm" data-active="true"></div>
        <div id="bcsResults" class="hidden"></div>
        <div id="imageGuide" class="hidden"></div>
        <div id="bcsGuide" class="hidden"></div>
      </div>
    </div>
  </div>
`

const result = {
  observerName: "",
  roomID: "1234",
  cageID: "1234",
  mouseID: "1234",
  palpationScore: "",
  files: [{
    filename: "grey_8_BCS5.jpg",
    mimeType: "image/jpeg",
    bcs: "4"
  }], 
  bcs: 4.0
}

const bcsForm = document.getElementById('bcsForm')
const bcsResults = document.getElementById('bcsResults')
const imageGuide = document.getElementById('imageGuide')
const bcsGuide = document.getElementById('bcsGuide')

bcsForm.innerHTML = form
imageGuide.innerHTML = images
bcsGuide.innerHTML = bcs

bcsForm.querySelector('#imageGuideLink').addEventListener('click', () => {
  bcsForm.classList.add('hidden')
  bcsResults.classList.add('hidden')
  imageGuide.classList.remove('hidden')
  bcsGuide.classList.add('hidden')
})

bcsForm.querySelector('#bcsGuideLink').addEventListener('click', () => {
  bcsForm.classList.add('hidden')
  bcsResults.classList.add('hidden')
  imageGuide.classList.add('hidden')
  bcsGuide.classList.remove('hidden')
})

const backButtons = document.getElementsByClassName('back-link')

for (let i = 0; i < backButtons.length; i++) {
  backButtons[i].addEventListener('click', () => {
    bcsForm.classList.remove('hidden')
    bcsResults.classList.add('hidden')
    imageGuide.classList.add('hidden')
    bcsGuide.classList.add('hidden')
  })
}

bcsForm.querySelector('#form-reset').addEventListener('click', () => {
  bcsForm.querySelector('#file-list').innerHTML = ''

  bcsForm.querySelector('#file-message').classList.remove('hidden')
  bcsForm.querySelector('#file-list').classList.add('hidden')

  bcsForm.querySelector('#form').reset()
})

bcsForm.querySelector('#file-upload').addEventListener('change', () => {
  console.log(bcsForm.querySelector('#file-upload').files)

  let fileList = '',
      fileCount = bcsForm.querySelector('#file-upload').files.length < 4 ? bcsForm.querySelector('#file-upload').files.length : 3

  for (let i = 0; i < fileCount; i++) {
    
    fileList += `
      <span class="inline-flex items-center rounded-full bg-indigo-100 py-0.5 px-2.5 mb-2.5 text-sm font-medium text-indigo-700">
        ${bcsForm.querySelector('#file-upload').files[i].name}
      </span>`
  }

  bcsForm.querySelector('#file-list').innerHTML = fileList

  bcsForm.querySelector('#file-message').classList.add('hidden')
  bcsForm.querySelector('#file-list').classList.remove('hidden')
})

bcsForm.querySelector('#form').addEventListener('submit', (event) => {
  
  event.preventDefault()

  const files = []

  for (let i = 0; i < bcsForm.querySelector('#file-upload').files.length; i++) {
    files.push(URL.createObjectURL(bcsForm.querySelector('#file-upload').files[i]))
  }
  
  predict(event).then(result => {

    result.images = files

    bcsResults.innerHTML = results(result)

    bcsResults.querySelector('#return').addEventListener('click', () => {
      bcsForm.classList.remove('hidden')
      bcsResults.classList.add('hidden')
      imageGuide.classList.add('hidden')
      bcsGuide.classList.add('hidden')
    })
    
    bcsForm.classList.add('hidden')
    bcsResults.classList.remove('hidden')
    imageGuide.classList.add('hidden')
    bcsGuide.classList.add('hidden')
  })
})

if(location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
  Sentry.init({
    dsn: "https://b09b80983a54445bbfa01657e146178a@o1080315.ingest.sentry.io/4504660631879680",
    integrations: [new BrowserTracing()],
    environment: 'Production',
    tracesSampleRate: 1.0,
  })
}