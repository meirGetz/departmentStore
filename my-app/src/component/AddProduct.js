import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function AddProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productDetails = {
            title,
            description,
            price: parseFloat(price)
        };

        try {
            const response = await fetch('http://localhost:8080/products/addproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productDetails),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Product added:', result);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <>
            <h1>Add Product</h1>
            <Form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Enter your title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                pattern="[A-Za-z]+"
                                title="Please enter letters only"
                                required
                            />
                        </FormGroup>
                    </li>
                    <li>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </FormGroup>
                    </li>
                    <li>
                        <FormGroup>
                            <Label for="price">Price</Label>
                            <Input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </FormGroup>
                    </li>

                    <button type="submit" color="success">Submit</button>

                </ul>
            </Form>
        </>
    );
}

export default AddProduct;
