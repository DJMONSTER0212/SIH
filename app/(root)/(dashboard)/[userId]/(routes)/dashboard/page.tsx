import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            score: -32,
            status: "pending",
            title: "Jal jeevan mission achieves milestone",
        },
        {
            id: "728ed53f",
            score: -3,
            status: "processing",
            title: "Rural house hold with tapwater Increase from 17% to 55%",
        },
        // ...
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable searchKey="title" columns={columns} data={data} />
        </div>
    )
}
