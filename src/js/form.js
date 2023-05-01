export const form = `
        <form id="form" class="space-y-8 divide-y divide-gray-200">
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div class="space-y-6 sm:space-y-5">
              <div>
                <h3 class="text-base font-semibold leading-6 text-gray-900">Instructions</h3>
                <p class="mt-2 text-sm text-gray-500">For each mouse enter your Name (optional), Holding room ID, Cage ID & Mouse ID into the boxes below. You can upload up to three images of each mouse, with the system displaying an average score across all of the images uploaded.</p>
                <p class="mt-2 text-sm text-gray-500">If you can add a manual palpation score for the mouse (optional) that would help support further development of the system and increase the accuracy. Please see <span id="bcsGuideLink" class="text-indigo-600 font-bold cursor-pointer">BCS method guide</span> for further information.</p>
                <p class="mt-2 text-sm text-gray-500">For detailed instructions for how to take optimal images please see: <span id="imageGuideLink" class="text-indigo-600 font-bold cursor-pointer">Image Guide</span></p>
              </div>

            <div id="errorMessage" class="hidden rounded-md bg-red-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-red-800">There was an error with your submission</h3>
                  <div class="mt-2 text-sm text-red-700">
                    <ul class="ml-6 list-disc"></ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="observerName" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Observer Name <span class="text-gray-400">(Optional)</span></label>
                <div class="mt-2 sm:col-span-2 sm:mt-0">
                  <div class="flex max-w-lg rounded-md shadow-sm">
                    <input type="text" name="observerName" id="observerName" autocomplete="observerName" class="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="roomID" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Room ID</label>
                <div class="mt-2 sm:col-span-2 sm:mt-0">
                  <div class="flex max-w-lg rounded-md shadow-sm">
                    <input required type="text" name="roomID" id="roomID" autocomplete="roomID" class="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="cageID" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Cage ID</label>
                <div class="mt-2 sm:col-span-2 sm:mt-0">
                  <div class="flex max-w-lg rounded-md shadow-sm">
                    <input required type="text" name="cageID" id="cageID" autocomplete="cageID" class="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="mouseID" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Mouse ID</label>
                <div class="mt-2 sm:col-span-2 sm:mt-0">
                  <div class="flex max-w-lg rounded-md shadow-sm">
                    <input required type="text" name="mouseID" id="mouseID" autocomplete="mouseID" class="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Images <span class="text-gray-400">(Max 3)</span></label>
                <div id="dropZone" class="mt-2 sm:col-span-2 sm:mt-0">
                  <div class="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div id="file-message" class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload files</span>
                          <input id="file-upload" name="file-upload" type="file" class="sr-only" multiple="multiple" required>
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <div id="file-list" class="hidden">
                    </div>
                  </div>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="palpationScore" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Palpation Score <span class="text-gray-400">(Optional)</span></label>
                <div class="mt-2 sm:col-span-2 sm:mt-0">
                  <div class="flex max-w-lg rounded-md shadow-sm">
                    <input type="text" name="palpationScore" id="palpationScore" autocomplete="palpationScore" class="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="pt-5">
            <div class="flex justify-end gap-x-3">
              <button id="form-reset" type="button" class="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Reset
              </button>
              <button id="submit" type="submit" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150">
                <svg class="hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submit</span>
              </button>
            </div>
          </div>
        </form>
    `

export async function predict(event) {
    
    event.preventDefault()

    toggleLoadingButton()
  
    const data = new FormData(event.target)

    let imageCount = 0

    // Split into seperate form data tuples
    for(const key of data.keys()) {
      if (key === 'file-upload') {
        data.append(`image${imageCount + 1}`, data.getAll(key)[imageCount])
        imageCount++
      }
    }

    data.delete('file-upload')

    var requestOptions = {
      method: 'POST',
      body: data,
      redirect: 'follow'
  }

    let status = null
    
    return fetch("https://mousemapp.azurewebsites.net/api/predict?code=72zqkChgmomeOZmmwH_-wT1fg6nxykamnJTExzALnKccAzFufDWatg==", requestOptions)
      .then(response => {
        status = response.status
        return response.json()
      })
      .then(result => {
        toggleLoadingButton()

        if(status === 200) {
          return result
        }
        else {
          if(result.hasOwnProperty('errors')) {
            toggleErrorMessage(result.errors)
          }
        }
      })
      .catch(error => {
        throw new Error(error)
      })
}

function toggleLoadingButton() {
    const submitButton = document.getElementById('submit')
    const processing = submitButton.getElementsByTagName('span')[0].innerText === 'Processing...'

    submitButton.classList.toggle('cursor-not-allowed')
    submitButton.getElementsByTagName('span')[0].innerText = processing ? 'Submit' : 'Processing...'
    submitButton.getElementsByTagName('svg')[0].classList.toggle('hidden')
}

function toggleErrorMessage(message) {
    const errorMessage = document.getElementById('errorMessage')

    let errorList = ''

    for (const [key, value] of Object.entries(message)) {
      errorList += `<li>${value}</li>`
    }
    
    errorMessage.getElementsByTagName('ul')[0].innerHTML = errorList
    errorMessage.classList.toggle('hidden')
}