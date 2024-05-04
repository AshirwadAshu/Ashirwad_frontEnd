import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Table } from "react-bootstrap";

function Apps() {
  const [fetchData, setFetchData] = useState([]);
  const [addData, setAddData] = useState({ pName: "", pPrice: "", pDesc: "" });
  const [editData, setEditData] = useState({
    _id: "",
    pName: "",
    pPrice: "",
    pDesc: "",
  });

  useEffect(() => {
    apiFetch();
  }, []);

  const apiFetch = async () => {
    try {
      const res = await axios.get(
        "https://p-9x7e.onrender.com/products/products"
      );
      setFetchData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteApi = async (deleteId) => {
    try {
      const res = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${deleteId}`
      );
      apiFetch();
      alert(res.data.message);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const addApi = async () => {
    try {
      const res = await axios.post(
        "https://p-9x7e.onrender.com/products/add-product",
        addData
      );
      alert(res.data.message);
      apiFetch();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const editApi = async (editId) => {
    try {
      const res = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${editId}`,
        editData
      );
      alert(res.data.message);
      apiFetch();
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const takeAddButtonRequest = (event) => {
    const { name, value } = event.target;
    setAddData({ ...addData, [name]: value });
  };

  const takeEditDataAndUpdate = (event) => {
    const { name, value } = event.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
     <h1>API OPERATIONS</h1>
  <div>
    <h3>ADD</h3>
    <Form>
      <Form.Group className="mx-auto w-50 mb-3">
        <Form.Control
          type="text"
          placeholder="Product Name"
          name="pName"
          value={addData.pName}
          onChange={takeAddButtonRequest}
        />
      </Form.Group>
      <Form.Group className="mx-auto w-50 mb-3">
        <Form.Control
          type="text"
          placeholder="Product Price"
          name="pPrice"
          value={addData.pPrice}
          onChange={takeAddButtonRequest}
        />
      </Form.Group>
      <Form.Group className="mx-auto w-50 mb-3">
        <Form.Control
          type="text"
          placeholder="Product Description"
          name="pDesc"
          value={addData.pDesc}
          onChange={takeAddButtonRequest}
        />
      </Form.Group>
      <div className="text-center">
        <Button onClick={addApi}>Add Product</Button>
      </div>
    </Form>
  </div>

  <div>
    <br />
    <h2>EDIT</h2>
    <Form>
      <Form.Group className="mx-auto w-50 mb-3">
        <Form.Control
          type="text"
          placeholder="Product ID to Edit"
          name="_id"
          value={editData._id}
          onChange={takeEditDataAndUpdate}
        />
      </Form.Group>
      <Form.Group className="mx-auto w-50 mb-3">
        <Form.Control
          type="text"
          placeholder="New Product Name"
          name="pName"
          value={editData.pName}
          onChange={takeEditDataAndUpdate}
        />
      </Form.Group>
      <Form.Group className="mx-auto w-50 mb-3">
        <Form.Control
          type="text"
          placeholder="New Product Price"
          name="pPrice"
          value={editData.pPrice}
          onChange={takeEditDataAndUpdate}
        />
      </Form.Group>
      <Form.Group className="mx-auto w-50 mb-3">
        <Form.Control
          type="text"
          placeholder="New Product Description"
          name="pDesc"
          value={editData.pDesc}
          onChange={takeEditDataAndUpdate}
        />
      </Form.Group>
      <div className="text-center">
        <Button onClick={() => editApi(editData._id)}>Update</Button>
      </div>
    </Form>

  <div>
    <br />
    <h2>EDIT</h2>
    <Form>
      <Form.Group className="mx-auto w-50 mb-3">
        <Form.Control
          type="text"
          placeholder="Product ID to Edit"
          name="_id"
          value={editData._id}
          onChange={takeEditDataAndUpdate}
        />
      </Form.Group>
      <Form.Group className="mx-auto w-50 mb-3">
        <Form.Control
          type="text"
          placeholder="New Product Name"
          name="pName"
          value={editData.pName}
          onChange={takeEditDataAndUpdate}
        />
      </Form.Group>
      <Form.Group className="mx-auto w-50 mb-3">
        <Form.Control
          type="text"
          placeholder="New Product Price"
          name="pPrice"
          value={editData.pPrice}
          onChange={takeEditDataAndUpdate}
        />
      </Form.Group>
      <Form.Group className="mx-auto w-50 mb-3">
        <Form.Control
          type="text"
          placeholder="New Product Description"
          name="pDesc"
          value={editData.pDesc}
          onChange={takeEditDataAndUpdate}
        />
      </Form.Group>
      <div className="text-center">
        <Button onClick={() => editApi(editData._id)}>Update</Button>
      </div>
    </Form>
        </div>

        <div>
          <br />
          <h2>EDIT</h2>
          <Form>
          <Form>
  <Form.Group className="mx-auto w-50 mb-3">
    <Form.Control
      type="text"
      placeholder="Product ID to Edit"
      name="_id"
      value={editData._id}
      onChange={takeEditDataAndUpdate}
    />
  </Form.Group>
  <Form.Group className="mx-auto w-50 mb-3">
    <Form.Control
      type="text"
      placeholder="New Product Name"
      name="pName"
      value={editData.pName}
      onChange={takeEditDataAndUpdate}
    />
  </Form.Group>
  <Form.Group className="mx-auto w-50 mb-3">
    <Form.Control
      type="text"
      placeholder="New Product Price"
      name="pPrice"
      value={editData.pPrice}
      onChange={takeEditDataAndUpdate}
    />
  </Form.Group>
  <Form.Group className="mx-auto w-50 mb-3">
    <Form.Control
      type="text"
      placeholder="New Product Description"
      name="pDesc"
      value={editData.pDesc}
      onChange={takeEditDataAndUpdate}
    />
  </Form.Group>
  <div className="text-center">
    <Button onClick={() => editApi(editData._id)}>Update</Button>
  </div>
</Form>
  
</Form>
        </div>

        <br />

        <div>
          <h2>Products</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fetchData.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.pName}</td>
                  <td>${product.pPrice}</td>
                  <td>
                    <Button variant="danger" onClick={() => deleteApi(product._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Apps;