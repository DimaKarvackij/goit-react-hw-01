import css from './TransactionHistory.module.css'
export default function TransactionHistory({ items }) {
    return (
        <table className={css.table_tcontainer}>
            <thead >
                <tr>
                    <th className={css.th_page}>Type</th>
                    <th className={css.th_page}>Amount</th>
                    <th className={css.th_page}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tbody}>{items.map((item) => {
                return <tr key={item.id}>
                    <td className={css.td}>{item.type}</td>
                    <td className={css.td}>{item.amount}</td>
                    <td className={css.td}>{item.currency}</td>
                </tr>
            })}
            </tbody>
        </table>

    )

}

