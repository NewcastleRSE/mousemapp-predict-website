export function results(result) {
    
    window.localStorage.setItem('bcs', JSON.stringify(result))

    if(result.observerName === '') {
        result.observerName = 'None'
    }

    if(result.palpationScore === '') {
        result.palpationScore = 'None'    
    }

    return `
    <div class="overflow-hidden">
        ${alertBox(result.bcs.toFixed(1))}
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Observer Name</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 ${result.observerName === 'None' ? 'italic' : ''}">${result.observerName}</dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Room ID</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">${result.roomID}</dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Cage ID</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">${result.cageID}</dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Mouse ID</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">${result.mouseID}</dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Palpation Score</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 ${result.palpationScore === 'None' ? 'italic' : ''}">${result.palpationScore}</dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Images</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <ul role="list" class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            ${imageList(result.images)}
                        </ul>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
    <div class="pt-5">
        <div class="flex justify-end gap-x-3">
            <button id="return" type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md bg-white hover:bg-gray-50 transition ease-in-out duration-150">
                Return
            </button>
            <button id="download" type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150">
                Download
            </button>
        </div>
    </div>
    `
}

function alertBox(score) {

    let colour = '',
        title = `BCS ${score} - `,
        message = `Based on these images, the mouse has a Body Condition Score of ${score}. `

    switch (true) {
        case (score < 2):
            colour = 'red'
            title += 'Issue'
            message += 'Immediate action is required.'
            break
        case (score < 3):
            colour = 'yellow'
            title += 'Caution'
            message += 'Further monitoring is required, action may be needed.'
            break
        case (score < 4):
            colour = 'green'
            title += 'Normal'
            message += 'No action is required.'
            break
        case (score < 5):
            colour = 'yellow'
            title += 'Caution'
            message += 'Further monitoring is required, action may be needed.'
            break
        default:
            colour = 'red'
            title += 'Issue'
            message += 'Immediate action required.'
            break
    }

    return `
    <div class="rounded-md bg-${colour}-50 p-4 my-4">
        <div class="flex">
            <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-${colour}-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="ml-3">
                <h3 class="text-sm font-medium text-${colour}-800">${title}</h3>
                <div class="mt-2 text-sm text-${colour}-700">
                    <p>${message}</p>
                </div>
            </div>
        </div>
    </div>
`
}

function imageList(images) {
    let html = ''

    images.forEach(image => {
        html += `<li><img class="aspect-[3/2] w-full rounded-2xl object-cover" src="${image}" alt=""></li>`
    })

    return html
}