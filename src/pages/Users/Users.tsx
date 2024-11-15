import { ChangeEvent, useEffect, useState, useRef } from 'react';
import useSWR from 'swr';
import { FaChevronDown } from 'react-icons/fa6';
import { dashboardCardData } from '../Dashboard';
import './User.scss';
import { Card, CustomPagination, DataTable } from '../../components';
import { fetcher } from '../../api';
import { User } from '../../types';

const endpoint = 'https://run.mocky.io/v3/7da93c6b-2a6e-4f0a-9c37-f4f231503138';

export const Users = () => {
  const { data } = useSWR(endpoint, fetcher);
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else if (data?.users) {
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
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="">
      <div className="font-larger text-color-secondary mb-4 fw-medium">Users</div>
      <div className="d-flex flex-dir-column gap-3">
        <div
          className="cards-container d-flex align-items-center justify-content-between gap-4"
          ref={ref}
        >
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
        <div>
          <DataTable users={getCurrentPageUsers()} />
        </div>
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
