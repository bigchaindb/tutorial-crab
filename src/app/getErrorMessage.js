export default (err) => {
    let errMessage = 'Something went wrong!'
    if (err.message) {
        errMessage += `\n\n${err.message}`
    }
    if (err.status) {
        errMessage += `\n\nstatus: ${err.status}\n${err.statusText}`
    }
    if (err.json) {
        return err.json()
            .then(errObject => {
                if (errObject.message) {
                    errMessage += `\n\n: ${errObject.message}`
                }
                return errMessage
            })
    } else {
        return Promise.resolve(errMessage)
    }
}
