export function results(result) {
    console.log(result)

    document.getElementById('content').innerHTML = `
        <h4>${result.bcs}</h4>
    `
}