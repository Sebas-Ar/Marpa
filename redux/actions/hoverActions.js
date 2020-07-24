export const ACTIVATE_HOVER = "ACTIVATE_HOVER";
export const DESACTIVATE_HOVER = "DESACTIVATE_HOVER";
export const ACTIVATE_FIND = "ACTIVATE_FIND"
export const DESACTIVATE_FIND = "DESACTIVATE_FIND"

export const activateHover = () => ({
    type: ACTIVATE_HOVER,
    payload: {value: true}
})

export const desativateHover = () => ({
    type: DESACTIVATE_HOVER,
    payload: {value: false}
})

export const activateFind = () => ({
    type: ACTIVATE_FIND,
    payload: {popup: true}
})

export const desativateFind = () => ({
    type: DESACTIVATE_FIND,
    payload: {popup: false}
})