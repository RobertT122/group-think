import { connect } from 'react-redux';
import { changeBackground } from '../../actions/background_actions';
import MainPage from './main_page';

const mstp = ({ ui }) => ({
    background: ui.background
})

const mdtp = dispatch => ({
    changeBackground: background => dispatch(changeBackground(background))
})

export default connect(mstp, mdtp)(MainPage);