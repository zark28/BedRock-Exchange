import React, { useEffect, useState } from 'react';
import useRequestResource from '../hooks/useRequestResource';
import NestedLayout from '../components/NestedLayout';
import AdminNavBar from '../components/AdminNavBar';
import AddBlogForm from '../components/AddBlogForm';
import UpdateBlogForm from '../components/UpdateBlogForm';
const AdminPage = () => {
  const [addForm, setAddForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [selectedBlog, setSeletcedBlog] = useState();
  const { resources, getResources, deleteResource } = useRequestResource({
    endpoint: 'blogs',
    blogId: selectedBlog,
  });
  useEffect(() => {
    getResources();
  }, [addForm, getResources, updateForm, selectedBlog]);

  const handleDeleteBlog = (blogId) => {
    setSeletcedBlog(blogId);
    const feedBack = prompt(
      'Are you sure u want to delete this blog? yes/y or no/n'
    );
    if (feedBack === 'yes' || feedBack === 'y') {
      deleteResource();
    } else {
    }
  };

  const handleShowAddForm = (e) => {
    e.preventDefault();

    setAddForm(!addForm);
  };
  const handleShowUpdateForm = (blogId) => {
    setUpdateForm(!updateForm);
    setSeletcedBlog(blogId);
  };
  return (
    <NestedLayout title="blog update" addForm={addForm} updateForm={updateForm}>
      <AdminNavBar onClick={handleShowAddForm} addForm={addForm} />
      {addForm ? <AddBlogForm onClick={handleShowAddForm} /> : ''}
      {updateForm ? (
        <UpdateBlogForm
          allBlogs={resources.blogs}
          onClick={handleShowUpdateForm}
          blogId={selectedBlog}
        />
      ) : (
        ''
      )}
      <div
        className={`w-full grid grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-3   p-10 gap-x-8  gap-y-20`}
      >
        {resources.blogs?.map((blog, i) => (
          <div
            key={i}
            className="flex w-full h-fit flex-col items-center shadow-xl shadow-textColor justify-center gap-5 p-5 rounded-lg text-secondaryColor "
          >
            <img
              className="w-full h-80 object-contain object-center"
              src={blog.image}
              alt={blog.title}
            />
            <h3 className="w-full text-xl font-bold">{blog.title}</h3>
            <p className="text-lg">{blog.description}</p>
            <div className="w-full flex md:flex-row  flex-col items-center justify-evenly gap-4">
              <button
                onClick={(event) => handleShowUpdateForm(blog._id)}
                className="text-xl font-bold py-2 px-3 rounded-lg transition-all duration-75 text-primaryColor-white bg-primaryColor
       hover:text-textColor"
              >
                Update
              </button>
              <button
                onClick={(event) => handleDeleteBlog(blog._id)}
                className="text-xl font-bold py-2 px-3 rounded-lg transition-all duration-75 text-textColor-red bg-primaryColor
       hover:text-textColor-redDark"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </NestedLayout>
  );
};

export default AdminPage;
