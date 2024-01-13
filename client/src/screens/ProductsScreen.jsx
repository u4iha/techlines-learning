import {
	Center,
	Wrap,
	WrapItem,
	Spinner,
	Stack,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Alert,
} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import { useEffect } from "react";

const ProductsScreen = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.products);
	const { loading, error, products } = productList;

	useEffect(() => dispatch(getProducts()), [dispatch]);
	return (
		<Wrap spacing={"30px"} justify={"center"} minHeight={"100vh"}>
			{loading ? (
				<Stack direction='row' spacing={4}>
					<Spinner at={20} thickness='3px' speed='1s' emptyColor='gray.200' color='purple.500' size='xl' />
				</Stack>
			) : error ? (
				<Alert status='error'>
					<AlertIcon />
					<AlertTitle>HEHE LOL</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			) : (
				products.map((product) => (
					<WrapItem key={product._id}>
						<Center w='250px' h='550px'>
							<ProductCard product={product} />
						</Center>
					</WrapItem>
				))
			)}
		</Wrap>
	);
};

export default ProductsScreen;
