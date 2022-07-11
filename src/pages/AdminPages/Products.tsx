import {Layout} from "../../components/Layout";
import {ProductCard} from "../../components/ProductCard";
import {Button, TextField} from "@mui/material";
import {Add, Edit} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {PrimaryModal} from "../../components/PrimaryModal";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    areProductsLoadedSelector, createProductSelector,
    fetchProducts,
    productsSelector, setCreateProductIngredientsDescription,
    setCreateProductName, setCreateProductPrice,
    createProduct, deleteProduct, setUpdateProduct, updateProductSelector,
    setUpdateProductName, setUpdateProductPrice, setUpdateProductIngredientsDescription, updateProduct
} from "../../store/products/productsSlice";
import ProductDTO from "../../dtos/models/ProductDTO";

export function Products(){
    const dispatch = useAppDispatch();
    const areProductsLoaded = useAppSelector(areProductsLoadedSelector);
    const products = useAppSelector(productsSelector);
    const createProductModel = useAppSelector(createProductSelector);
    const updateProductModel = useAppSelector(updateProductSelector);

    const [addModalOpen, setAddModalOpen] = useState(false)
    const [editModalOpen, setEditModalOpen] = useState(false)

    useEffect(() => {
        if(areProductsLoaded === false){
            dispatch(fetchProducts());
        }
    }, [dispatch, areProductsLoaded])

    function createProductClick() {
        dispatch(createProduct(createProductModel));
        setAddModalOpen(false);
    }

    return(
        <Layout title={"Products"}>
            <PrimaryModal open={addModalOpen} onClose={() => setAddModalOpen(false)}>
                <>
                    <h1>Add Product</h1>
                    <h3>Enter product data</h3>
                    <div className={"product-form"}>
                        <TextField
                            className={"product-input"}
                            label={"Name"}
                            onChange={(e) => dispatch(setCreateProductName(e.target.value))}
                        />
                        <TextField
                            className={"product-input"}
                            label={"Price"}
                            onChange={(e) => dispatch(setCreateProductPrice(Number(e.target.value)))}
                        />
                        <TextField
                            className={"product-input"}
                            label={"Ingredients"}
                            multiline
                            minRows={3}
                            maxRows={3}
                            onChange={(e) => dispatch(setCreateProductIngredientsDescription(e.target.value))}
                        />

                        <Button variant={"contained"} onClick={() => createProductClick()}>
                            <Add/>
                            Create Product
                        </Button>
                    </div>
                </>
            </PrimaryModal>

            <PrimaryModal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
                <>
                    <h1>Edit Product</h1>
                    <h3>Edit product data</h3>
                    <div className={"product-form"}>
                        <TextField
                            value={updateProductModel.name}
                            onChange={(e) => dispatch(setUpdateProductName(e.target.value))}
                            className={"product-input"}
                            label={"Name"}
                        />
                        <TextField
                            value={updateProductModel.price}
                            onChange={(e) => dispatch(setUpdateProductPrice(Number(e.target.value)))}
                            className={"product-input"}
                            label={"Price"}
                        />
                        <TextField
                            value={updateProductModel.ingredientsDescription}
                            onChange={(e) => dispatch(setUpdateProductIngredientsDescription(e.target.value))}
                            className={"product-input"}
                            label={"Ingredients"}
                            multiline
                            minRows={3}
                            maxRows={3}
                        />

                        <Button variant={"contained"} onClick={() => {
                            dispatch(updateProduct(updateProductModel));
                            setEditModalOpen(false);
                        }}>
                            <Edit/>
                            Edit Product
                        </Button>
                    </div>
                </>
            </PrimaryModal>

            <h1>View all products in the platform!</h1>
            <div className={"products-actions"}>
                <Button variant={"contained"} onClick={() => setAddModalOpen(true)}>
                    <Add/>
                    Add new product
                </Button>
            </div>
            {products.map((product: ProductDTO) => {
                return (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        ingredientsDescription={product.ingredientsDescription}
                        onEditClick={() => {
                            setEditModalOpen(true);
                            dispatch(setUpdateProduct(product));
                        }}
                        onDeleteClick={() => dispatch(deleteProduct(product.id))}
                    />
                )
            })}
        </Layout>
);
}