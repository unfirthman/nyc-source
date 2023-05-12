// chsPourHouse.jsx
import "../layout.css";
import data from "../../../../../JSON/chs_pour_house.json";
import { replaceSkippedNumbers } from "../replaceSkippedNumbers";

const ChsPourHouse = () => {
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
                    <th>CHS Pour House</th>
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

export default ChsPourHouse;
