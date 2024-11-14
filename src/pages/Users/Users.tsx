import useSWR from 'swr';
import { dashboardCardData } from '../Dashboard';
import './User.scss';
import { Card, CustomPagination, DataTable } from '../../components';
import { fetcher } from '../../api';
import { ChangeEvent, useEffect, useState } from 'react';
import { User } from '../../types';
import { FaChevronDown } from 'react-icons/fa6';

const endpoint = 'https://run.mocky.io/v3/f351ee48-b820-41ee-b0d4-e61a8696dd56';

export const Users = () => {
  const { data } = useSWR(endpoint, fetcher);
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else if (data?.users) {
      setUsers(data.users);
      localStorage.setItem('users', JSON.stringify(data.users));
    }
  }, [data]);

  const getCurrentPageUsers = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return users.slice(startIndex, endIndex);
  };

  const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <div className="font-larger text-color-secondary mb-4 fw-medium">Users</div>
      <div className="d-flex flex-dir-column gap-3">
        <div className="cards-container d-flex align-items-center justify-content-between gap-4">
          {dashboardCardData.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              count={item.count}
              background={item.background}
            />
          ))}
        </div>
        <DataTable users={getCurrentPageUsers()} />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center font-small">
            Showing
            <p className="d-flex align-items-center gap-2 pagi mx-1">
              <span className="text-color-secondary">
                {Math.min(currentPage * recordsPerPage, users.length)}
              </span>
              <FaChevronDown className="ml-n1 text-color-primary" size={10} />
            </p>
            out of {users.length}
          </div>

          <CustomPagination
            count={Math.ceil(users.length / recordsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};
