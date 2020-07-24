export const styleButton = (value, type) => {
    return {
        backgroundColor: value ? "var(--main-color)" : "#3b3b3b",
        color: value ? "#3b3b3b" : "#ccc",
        fontSize: value ? "16px" : "10px",
        width: value ? "95px" : "60px",
        height: value ? "30px" : "20px",
        borderRadius:
            type === "battery"
                ? value
                    ? "10px 10px 0 0"
                    : "0 10px 0 0"
                : value
                ? "10px 10px 0 0"
                : "10px 0 0 0",
    }
}
