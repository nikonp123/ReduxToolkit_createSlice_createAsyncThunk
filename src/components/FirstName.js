import React from 'react';
import { useSelector } from 'react-redux';

const FirstName = () => {
  const firstName = useSelector((state) => state.user.firstName);
  return <div className="font-bold">First Name: {firstName}</div>;
};

export default FirstName;
