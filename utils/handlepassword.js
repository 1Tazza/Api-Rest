import bcryptjs from "bcryptjs"

const encrypt = async() => {
    const hash = await bcryptjs.hash()
}

const compare = () => {


}

export {encrypt, compare}