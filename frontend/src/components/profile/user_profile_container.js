import { connect } from 'react-redux';
import UserProfile from "./user_profile";

const mapSTP = ({ session }) => ({
    currentUser: session.user 
})

export default connect(mapSTP, null)(UserProfile); 