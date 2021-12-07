import { connect } from 'react-redux';
import UserProfile from "./user_profile";

const mapSTP = state => ({
    currentUser = state.session.user 
})

export default connect(mapSTP, null)(UserProfile); 