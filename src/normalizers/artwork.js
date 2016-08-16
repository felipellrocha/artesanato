import { normalize, Schema, arrayOf } from 'normalizr'

const Artwork = new Schema('artwork', { idAttribute: 'id' });

export default Artwork
