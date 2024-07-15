import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { baseUrl } from "../../../baseurl";

function Allusers() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    useEffect(() => {
        fetch(`${baseUrl}/allusers`)
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

    const filteredData = data.filter(user =>
        user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        // user.mobilenumber.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 text-white">All Users</h1>
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Users"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th onClick={() => sortData('firstname')}>
                                First Name <FontAwesomeIcon icon={getSortIcon('firstname')} />
                            </th>
                            <th onClick={() => sortData('lastname')}>
                                Last Name <FontAwesomeIcon icon={getSortIcon('lastname')} />
                            </th>
                            <th onClick={() => sortData('mobilenumber')}>
                                Mobile Number <FontAwesomeIcon icon={getSortIcon('mobilenumber')} />
                            </th>
                            <th onClick={() => sortData('email')}>
                                Email ID <FontAwesomeIcon icon={getSortIcon('email')} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((value, index) => (
                            <tr key={index}>
                                <td>{value.firstname}</td>
                                <td>{value.lastname}</td>
                                <td>{value.mobilenumber}</td>
                                <td>{value.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Allusers;
