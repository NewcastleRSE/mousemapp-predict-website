import bcsFeatures from '../images/bcs-features.png'
import bcsScale from '../images/bcs-scale.png'
import bwTop from '../images/bw-top.jpg'
import bwSide from '../images/bw-side.jpg'
import heatTop from '../images/heat-top.jpg'
import heatSide from '../images/heat-side.jpg'

export const bcs = `
    <div class="space-y-6 sm:space-y-5">
        <div>
            <h3 class="text-base font-semibold leading-6 text-gray-900">Guide to Body Condition Scoring</h3>
            <p class="mt-2 text-sm text-gray-500">Body condition scoring (BCS) is a non-invasive method of assessing health & establishing endpoints in young (i.e. growing) & adult mice. BCS is often used when bodyweight cannot be viably monitored.</p>
            <p class="mt-2 text-sm text-gray-500">BCS scored on a 5-point scale developed by Burkholder et al. (2012)*</p>
        </div>
        <div>
            <img src="${bcsFeatures}" alt="bcs-guide" class="mb-8 mx-auto" />
            <img src="${bcsScale}" alt="bcs-guide" class="mx-auto" />
            <p class="mb-8 text-xs text-center text-gray-500">Burkholder et al. (2012) Curr Protoc Mouse Biol 2: 145–165</p>
        </div>
        <div>
            <p class="mt-2 text-sm text-gray-500">Under normal circumstances BCS is scored using palpation determine muscle mass & fat covering over bony protuberances in sacral region of vertebrae (i.e., cranial base of the tail).</p>
        </div>
        <div class="pt-5 flex justify-end gap-x-3">
            <button type="button" class="back-link rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Back
            </button>
        </div>
    </div>
`

export const images = `
    <div class="space-y-6 sm:space-y-5">
        <div>
            <h3 class="text-base font-semibold leading-6 text-gray-900">Guide to taking images</h3>
            <p class="mt-2 text-sm text-gray-500">Thermal images should be taken either using a thermal camera or thermal camera adapter for phone or table (e.g., FLIR ONE). The system can process images taken from two angles; side/profile view or top/overhead view. Examples of these can be seen below. You are able to upload up to three images of each mouse, with the system displaying an average score across all of the images uploaded.</p>
        </div>
        <div class="flex flex-row">
            <div class="basis-1/2 p-8">
                <h4 class="text-center font-bold mb-4">Side/Profile View</h4>
                <img src="${bwSide}" alt="bcs-guide" class="w-full mb-4" />
                <img src="${heatSide}" alt="bcs-guide" class="w-full" />
            </div>
            <div class="basis-1/2 p-8">
            <h4 class="text-center font-bold mb-4">Top/Overhead View</h4>
                <img src="${bwTop}" alt="bcs-guide" class="w-full mb-4" />
                <img src="${heatTop}" alt="bcs-guide" class="w-full" />
            </div>
        </div>
        <div class="pt-5 flex justify-end gap-x-3">
            <button type="button" class="back-link rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Back
            </button>
        </div>
    </div>
`