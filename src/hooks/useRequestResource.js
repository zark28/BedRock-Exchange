import React, { useCallback, useState } from 'react';
import axios from 'axios';
const useRequestResource = ({ endpoint, body, blogId }) => {
  const [resources, setResources] = useState([]);
  const getResources = useCallback(() => {
    axios
      .get(`http://localhost:4000/${endpoint}`)
      .then((res) => {
        const data = res.data;
        setResources(data);
      })
      .catch((err) => console.error(err));
  }, [endpoint]);

  const addResource = useCallback(() => {
    axios
      .post(`http://localhost:4000/${endpoint}`, { ...body })
      .then((res) => {})
      .catch((err) => console.error(err));
  }, [endpoint, body]);

  const updateResource = useCallback(() => {
    axios
      .patch(`http://localhost:4000/${endpoint}/${blogId}`, { ...body })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [endpoint, blogId, body]);

  const deleteResource = useCallback(() => {
    axios
      .delete(`http://localhost:4000/${endpoint}/${blogId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [endpoint, blogId]);

  return {
    resources,
    getResources,
    addResource,
    updateResource,
    deleteResource,
  };
};

export default useRequestResource;
