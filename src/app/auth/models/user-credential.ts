import { User } from 'firebase/auth';

export interface UserCredential {
    dditionalUserInfo?: unknown;
    credential: unknown;
    operationType?: string | null;
    user: User | null;
}
