import { getAccountWithTransactions } from '@/actions/account'
import { notFound } from 'next/navigation'
import {Suspense} from 'react'
import TransactionTable from '../_components/transaction-table'
import { BarLoader } from 'react-spinners'
import AccountChart from '../_components/account-chart'

const AccountPage = async ({ params }) => {
    const accountData = await getAccountWithTransactions(params.id)

    if (!accountData) {
        notFound();
    }

    const transactions = accountData.transactions || []; // Ensure transactions is always an array
    const account = { ...accountData };

    return (
        <div className='space-y-8 px-5 '>
            <div className="flex gap-4 item-end justify-between">

            <div className="">
                <h1 className="text-5xl sm:text-6xl font-bold gradient-title capitalize">{account.name}</h1>
                <p className="text-muted-foreground">{account.type.charAt(0) + account.type.slice(1).toLowerCase()}{""} Account</p>
            </div>

            <div className="text-right pb-2">
                <div className="text-xl sm:text-2xl  font-bold">
                    Rs. {parseFloat(account.balance).toFixed(2)}
                </div>
                <p className="text-sm text-muted-foreground">{account._count.transactions} Transactions</p>
            </div>
            </div>

            {/* Chart section*/}
            <Suspense
            fallback = {<BarLoader className='mt-4' width={"100%"} color='#9333ea'/>}
            >
                <AccountChart transactions = {transactions}/>
            </Suspense>

            {/* Trasaction Table*/}
            <Suspense
            fallback = {<BarLoader className='mt-4' width={"100%"} color='#9333ea'/>}
            >
                <TransactionTable transactions={transactions}/>
            </Suspense>
        </div>
    )
}

export default AccountPage;
