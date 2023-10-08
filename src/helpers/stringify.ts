import { EOL } from 'os'

const stringify = <T>(object: T) => JSON.stringify(object, null, 2) + EOL

export default stringify
