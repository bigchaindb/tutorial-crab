export default (err) => {
    let error = 'Something went wrong!'
    if (err.message) {
        error += `\n\n${err.message}`
    } else if (err.status) {
        error += `\n\nstatus: ${err.status}\n${err.statusText}`
    }
    return error
}
