import { useEffect, useState } from "react"

interface Student {
    id: number,
    name: string,
    age: number,
    isPassed: boolean
}

const PassLists: React.FC = () => {
    const [showList, setShowList] = useState<Student[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../data.json')
            const data: Student[] = await response.json()
            setShowList(data)
        }

        fetchData()
    }, [])

    return (
        <>
          <h1>Student Lists</h1>
          <ul>
            {showList.map(list => (
                <li key={list.id}>{list.name}</li>
            ))}
          </ul>
        </>
    )
}

export default PassLists