import { normalize, Schema, arrayOf } from 'normalizr'

const Profile = new Schema('profile', { idAttribute: 'id' });

export default Profile;
