const handleHttpError = (res, message = "Something Happened", code = 403) =>  {
    res.status(code)
    res.send({error: message})
}

export {handleHttpError}