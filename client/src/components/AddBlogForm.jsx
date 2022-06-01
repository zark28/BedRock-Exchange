import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useResquestResource from '../hooks/useRequestResource';

const AddBlogForm = ({ onClick }) => {
  // const navigate = useNavigate();
  const initialValue = {
    title: '',
    description: '',
    category: '',
    image: '',
  };
  const [blog, setBlog] = useState(initialValue);
  const { addResource, getResources } = useResquestResource({
    endpoint: 'blogs',
    body: blog,
  });

  // setting value for inputs
  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();

    if (blog.title && blog.description && blog.image) {
      addResource();
      alert('task Added');
      getResources();
    } else {
      alert('add task failed check input fields');
    }
  };

  return (
    <Container
      className="w-3/4 flex flex-col items-center justify-center bg-primaryColor-white shadow-textColor shadow-2xl"
      id="addmenu"
    >
      <Title className="w-full text-x flex items-center text-3xl font-bold justify-between">
        Add Blog{' '}
        <AiOutlineCloseCircle className="cursor-pointer" onClick={onClick} />
      </Title>
      <Form className="w-3/4 gap-10 py-2 flex flex-col items-center">
        <FormInputs className="w-full flex flex-col items-center justify-evenly gap-6">
          <Input
            type="text"
            id="title"
            name="title"
            label="Title"
            value={blog.title}
            placeholder="Name of task"
            onChange={handleChange}
          />
          <Input
            type="text"
            id="image"
            name="image"
            label="Image URL"
            value={blog.image}
            placeholder="Image URL"
            onChange={handleChange}
          />

          <Input
            type="text"
            id="category"
            name="category"
            label="Category"
            value={blog.category}
            placeholder="Add a category"
            onChange={handleChange}
          />
          <div className="flex flex-col w-3/4 items-centre justify-between border-b-2 py-2">
            <label htmlFor="description">Desctiption</label>
            <textarea
              className="-full bg-transparent border-0 outline-none text-lg p-2 text-secondaryColor"
              id="description"
              name="description"
              value={blog.description}
              placeholder="Add description"
              onChange={handleChange}
            />
          </div>
        </FormInputs>
        <Button
          onClick={handleAddBlog}
          className="text-xl font-bold py-2 px-3 rounded-lg transition-all duration-75 text-primaryColor-white bg-primaryColor
       hover:text-textColor"
        >
          Add Blog
        </Button>
      </Form>
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  border-radius: 10px;
  padding: 10px;
  z-index: 999;
`;
const Title = styled.h5``;
const FormInputs = styled.form``;

const Form = styled.div``;

const Button = styled.button``;

export default AddBlogForm;
