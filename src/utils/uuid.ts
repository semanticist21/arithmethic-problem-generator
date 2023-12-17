import {v4 as uuidv4} from 'uuid'

/**
 * @description uuid generator
 * @returns {string} uuid
 */
export const getUuid = (): string => uuidv4()
