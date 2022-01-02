import axios from "axios"

//add case
export const createData = (values, path, port) => async (dispatch) => {
    // console.log(values);
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        const { data } = await axios.post(
            `http://web01.exits.in:${port}/api/${path}`,
            values,
            config
        )

        console.log(data)
        if (data.success) {
            return {
                status: true,
                message: 'Data has been added Successfully !!',
                data: data
            }
        } else {
            return {
                status: false,
                message: 'Something went wrong please try again !!',
                data,
            }
        }
    } catch (error) {
        return {
            status: false,
            message:
                error.response && error.response.data.message
                    ? error.response.data
                    : error.message,
        }
    }
}

export const getAllData = (path, port) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        dispatch(setLoading(true))
        dispatch(setError(null))
        dispatch(setCase([]))
        const { data } = await axios.get(
            `http://web01.exits.in:${port}/api/${path}`,
            config
        )

        console.log(data)
        if (data.success) {
            return {
                status: true,
                message: 'All Data has been fetched Successfully !!',
                data: data
            }
        } else {
            return {
                status: false,
                message: 'Something went wrong please try again !!',
                data,
            }
        }
    } catch (error) {
        return {
            status: false,
            message:
                error.response && error.response.data.message
                    ? error.response.data
                    : error.message,
        }
    }
}


export const getDataById = (id, path, port) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        const { data } = await axios.get(
            `http://web01.exits.in:${port}/api/${path}/${id.id}`,
            config
        )
        console.log(data)
        if (data.success) {
            return {
                status: true,
                message: 'Single data has been fetched Successfully !!',
                data: data
            }
        } else {
            return {
                status: false,
                message: 'Something went wrong please try again !!',
                data,
            }
        }
    } catch (error) {
        return {
            status: false,
            message:
                error.response && error.response.data.message
                    ? error.response.data
                    : error.message,
        }
    }
}

export const updateDataById = (id, values, path, port) => async (dispatch) => {
    console.log(values)
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        dispatch(setLoading(true))
        dispatch(setError(null))

        const { data } = await axios.put(
            `http://web01.exits.in:${port}/api/${path}/${id}`,
            values,
            config
        )

        console.log(data)
        if (data.success) {
            return {
                status: true,
                message: 'Updated Data Successfully !!',
                data: data
            }
        } else {
            return {
                status: false,
                message: 'Something went wrong please try again !!',
                data,
            }
        }
    } catch (error) {
        return {
            status: false,
            message:
                error.response && error.response.data.message
                    ? error.response.data
                    : error.message,
        }
    }
}

export const deleteDataById = (id, path, port, getData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        dispatch(setLoading(true))
        dispatch(setError(null))
        const { data } = await axios.delete(
            `http://web01.exits.in:${port}/api/${path}/${id}`,
            config
        )

        console.log(data)
        if (data.success) {
            return {
                status: true,
                message: 'Data Deleted Successfully !!',
                data: data
            }
        } else {
            return {
                status: false,
                message: 'Something went wrong please try again !!',
                data,
            }
        }
    } catch (error) {
        return {
            status: false,
            message:
                error.response && error.response.data.message
                    ? error.response.data
                    : error.message,
        }
    }
}
