import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { baseUrl } from "../../../baseurl";

function Allbookings() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    useEffect(() => {
        fetch(`${baseUrl}/allbookings`)
            .then(res => res.json())
            .then(view => {
                setData(view);
            })
            .catch(error => {
                console.error("Error occurred", error);
            });
    }, []);

    const sortData = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        const sortedData = [...data].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        setData(sortedData);
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'ascending' ? faSortUp : faSortDown;
        }
        return null;
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter(booking =>
        booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.age.toString().includes(searchTerm.toLowerCase()) ||
        booking.persons.toString().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        // booking.mobile.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.startdate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.enddate.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 text-white">Bookings</h1>
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Bookings"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="table-responsive">
                <table className="table bg-dark table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th onClick={() => sortData('name')}>
                                Name <FontAwesomeIcon icon={getSortIcon('name')} />
                            </th>
                            <th onClick={() => sortData('age')}>
                                Age <FontAwesomeIcon icon={getSortIcon('age')} />
                            </th>
                            <th onClick={() => sortData('persons')}>
                                Persons <FontAwesomeIcon icon={getSortIcon('persons')} />
                            </th>
                            <th onClick={() => sortData('email')}>
                                Mail ID <FontAwesomeIcon icon={getSortIcon('email')} />
                            </th>
                            <th onClick={() => sortData('city')}>
                                City <FontAwesomeIcon icon={getSortIcon('city')} />
                            </th>
                            <th onClick={() => sortData('mobile')}>
                                Mobile Number <FontAwesomeIcon icon={getSortIcon('mobile')} />
                            </th>
                            <th onClick={() => sortData('startdate')}>
                                Start Date <FontAwesomeIcon icon={getSortIcon('startdate')} />
                            </th>
                            <th onClick={() => sortData('enddate')}>
                                End Date <FontAwesomeIcon icon={getSortIcon('enddate')} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((value, index) => (
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.persons}</td>
                                <td>{value.email}</td>
                                <td>{value.city}</td>
                                <td>{value.mobile}</td>
                                <td>{new Date(value.startdate).toLocaleDateString()}</td>
                                <td>{new Date(value.enddate).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Allbookings;
