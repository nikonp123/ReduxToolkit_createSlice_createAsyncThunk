import React from 'react';
import { useSelector } from 'react-redux';

const LastName = () => {
  const lastName = useSelector((state) => state.user.lastName);
  return <div className="font-bold">Last Name: {lastName}</div>;
};

export default LastName;
