import { compareSync } from 'bcrypt';

const verify = (compare: string, decoded: string): boolean => {
    return compareSync(compare, decoded);
}

export default verify;