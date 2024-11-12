import { useContext } from 'react'
import { LotteryContext } from '../contexts/LotteryContext'

export default function useLotteryContext() {
    const context = useContext(LotteryContext)

    if(!context)throw new Error("Sem contexto")

    return context
}
