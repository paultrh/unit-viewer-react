export const get_decoded_uri = (msg) => {
    try {
        return decodeURIComponent(msg)
    } catch (error) {
        return error.toString()
    }
}

export const get_unique_expandable_id = (panel) => {
    if (!panel._uuid) {
        throw '_uuid should not be empty'
    }
    return panel._uuid + get_decoded_uri(panel.message).length.toString()
}