import { activateFind, desativateFind, activateHover, desativateHover } from '../actions/hoverActions';

export const mapStateToProps = (state) => ({
    hover: state.hover,
})

export const mapDispatchToProps = {
    activateFind: activateFind,
    desativateFind: desativateFind,
    activateHover: activateHover,
    desativateHover: desativateHover

}