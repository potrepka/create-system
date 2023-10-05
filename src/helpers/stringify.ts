import { EOL } from 'os'

const stringify = (object: any) => JSON.stringify(object, null, 2) + EOL

export default stringify
