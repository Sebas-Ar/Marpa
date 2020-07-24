import {
    saveValuesDates,
    changeFetchDate,
    changeLight,
    changeRang,
    changeNumLights,
    getUserList,
    getId,
} from "../actions/userAction"

export const mapStateToProps = (state) => ({
    user: state.user,
})

export const mapDispatchToProps = {
    saveValuesDates: saveValuesDates,
    changeFetchDate: changeFetchDate,
    changeLight: changeLight,
    changeRang: changeRang,
    changeNumLights: changeNumLights,
    getUserList: getUserList,
    getId: getId
}
