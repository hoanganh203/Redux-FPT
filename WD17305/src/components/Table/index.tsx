

type columnsProps = {
    dataSource: any[],
    columns: any[]
}

const Table = ({ dataSource, columns }: columnsProps) => {

    const renderTH = columns.map((column) => {
        return <th key={column.key}>{column.title}</th>
    })

    const renderTD = dataSource.map((item) => {
        const renderCell = columns.map((column) => {
            return <td key={column.key}>
                {column.render ? column.render(item) : item[column.dataIndex]}
            </td>;
        })
        return <tr key={item.id}>{renderCell}</tr>;
    })
    return (

        <table>
            <thead>
                <tr>{renderTH}</tr>
            </thead>
            <tbody>{renderTD}</tbody>
        </table>
    )

}

export default Table