const getTimeStamp = (): string => {
      return new Date().toISOString()
}

const info = (nameSpace: string, message :string, object? : any) => {
      if (object) {
            console.log(`[${getTimeStamp()}] [INFO] [${nameSpace}] ${message}` , object)
      }else{
            console.log(`[${getTimeStamp()}] [INFO] [${nameSpace}] ${message}`)
      }
}

const warn = (nameSpace: string, message :string, object? : any) => {
      if (object) {
            console.log(`[${getTimeStamp()}] [WARN] [${nameSpace}] ${message}` , object)
      }else{
            console.log(`[${getTimeStamp()}] [WARN] [${nameSpace}] ${message}`)
      }
}

const error = (nameSpace: string, message :string, object? : any) => {
      if (object) {
            console.log(`[${getTimeStamp()}] [ERROR] [${nameSpace}] ${message}` , object)
      }else{
            console.log(`[${getTimeStamp()}] [ERROR] [${nameSpace}] ${message}`)
      }
}

const debug = (nameSpace: string, message :string, object? : any) => {
      if (object) {
            console.log(`[${getTimeStamp()}] [DEBUG] [${nameSpace}] ${message}` , object)
      }else{
            console.log(`[${getTimeStamp()}] [DEBUG] [${nameSpace}] ${message}`)
      }
}

export default {
      info,
      warn,
      error,
      debug
}