import './style.css'
import { predict } from './mousemapp'
import mice from './images/mice.jpg'

//<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
      

document.querySelector('#app').innerHTML = `
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500">
    <div class="h-screen relative isolate bg-gray-900 pt-12 px-6 sm:pt-16 lg:px-8 bg-blend-multiply" style="background-image:url('${mice}')">
      <svg viewBox="0 0 1097 845" aria-hidden="true" class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]">
        <path fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
        <defs>
          <linearGradient id="10724532-9d81-43d2-bb94-866e98dd6e42" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
            <stop stop-color="#776FFF" />
            <stop offset="1" stop-color="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <svg viewBox="0 0 1097 845" aria-hidden="true" class="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <path fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
        <defs>
          <linearGradient id="8ddc7edb-8983-4cd7-bccb-79ad21097d70" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
            <stop stop-color="#776FFF" />
            <stop offset="1" stop-color="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-10">Mouse MApp – Body Condition Scoring</h2>
        <h4 class="text-2xl tracking-tight text-white sm:text-4xl">An image classifier for the assessment of body condition (BCS) in mice</h4>
      </div>
      <div class="mx-auto max-w-4xl rounded-none rounded-t-lg bg-white p-10 mt-10 drop-shadow-lg">
        <form id="form" class="space-y-8 divide-y divide-gray-200">
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div class="space-y-6 sm:space-y-5">
              <div>
                <h3 class="text-base font-semibold leading-6 text-gray-900">Instructions</h3>
                <p class="mt-2 text-sm text-gray-500">For each mouse enter your Name, Holding room ID, Cage ID & Mouse ID into the boxed below. You are able to upload up to three images of each mouse, with the system displaying an average score across all of the images uploaded.</p>
                <p class="mt-2 text-sm text-gray-500">If you are able to add a score form manual palpation for the mouse, we can further develop the system & increase the accuracy.</p>
                <p class="mt-2 text-sm text-gray-500">For further information on Body Condition Score (BCS) method please see: BCS Guide</p>
                <p class="mt-2 text-sm text-gray-500">For detailed instructions for how to take optimal images please see: Image Guide</p>
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
                <div class="mt-2 sm:col-span-2 sm:mt-0">
                  <div class="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div class="space-y-1 text-center">
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
              <button type="submit" class="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
`

const form = document.getElementById('form')
form.addEventListener('submit', predict)