const customHeader = (req, res, next) => {
    try{
      const apiKey = req.headers.api_key
      if(apiKey == "leifer-01") {
        next()
      }else {
        res.status(403)
        res.send({error: "API KEY NO ES CORRECTO"})
      }
    }catch(e){
      res.status(500)
      res.send({error: "ERROR EN CUSTOM HEADER"})
    }

}

export {customHeader}