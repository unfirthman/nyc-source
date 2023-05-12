// gaillard.jsx
import "../layout.css";
import data from "../../../../../JSON/gaillard.json";
import { replaceSkippedNumbers } from "../replaceSkippedNumbers";

const Gaillard = () => {
    if (data === []){
        return null
    }
    const filterData = replaceSkippedNumbers(data, 0);
    const mappedData = filterData.map((item) => {
        return {
            name: item.name,
            date: item.date,
        };
    });

    // Slice the array to display only the first 14 items
    const slicedData = mappedData.slice(0, 14);

    return (
        <table>
            <thead>
                <tr>
                    <th>The Gaillard Auditorium</th>
                </tr>
            </thead>
            <tbody>
                {slicedData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Gaillard;
