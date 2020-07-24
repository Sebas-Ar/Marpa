import withDatabase from './withDatabase';

const middleware = handler => withDatabase(handler)

export default middleware