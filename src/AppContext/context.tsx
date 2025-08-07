import { createContext } from 'react'
import type { AuthContextType } from '../Types/auth.type'

export const AuthContext = createContext<AuthContextType | undefined>(undefined);