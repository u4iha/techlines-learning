import {
	Box,
	Flex,
	HStack,
	Link,
	IconButton,
	Icon,
	Text,
	useDisclosure,
	Button,
	Stack,
	useColorModeValue,
	useColorMode,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiHeadshot } from "react-icons/gi";

const links = [
	{ linkName: "Products", path: "/products" },
	{ linkName: "ShopingCart", path: "/cart" },
];

const NavLink = ({ path, children }) => (
	<Link
		as={ReactLink}
		to={path}
		px={2}
		py={2}
		rounded='md'
		_hover={{ textDecoration: "none", bg: useColorModeValue("blue.500", "red.200") }}
	>
		{children}
	</Link>
);

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box bg={useColorModeValue("red.200", "blue.500")} px={4}>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<IconButton
					size='md'
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack>
					<Link as={ReactLink} to={"/"}>
						<Flex alignItems={"center"}>
							<Icon as={GiHeadshot} h={6} w={6} color={"purple.900"} />
							<Text fontWeight={"extrabold"}>Huy</Text>
						</Flex>
					</Link>
					<HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
						{links.map((link) => (
							<NavLink key={link.linkName} path={link.path}>
								{link.linkName}
							</NavLink>
						))}
					</HStack>
				</HStack>
				<Flex alignItems={"center"}>
					<NavLink>
						<Icon
							as={colorMode === "light" ? MoonIcon : SunIcon}
							alignSelf={"center"}
							onClick={() => toggleColorMode()}
						/>
					</NavLink>
					<Button as={ReactLink} to={"/login"} p={2} fontSize={"sm"} fontWeight={400} variant={"link"}>
						Sign In
					</Button>
					<Button
						as={ReactLink}
						to={"/registration"}
						p={2}
						display={{ base: "none", md: "inline-flex" }}
						fontSize={"sm"}
						fontWeight={400}
						_hover={{ bg: "orange.400" }}
						bg={"orange.800"}
						color={"white"}
					>
						Sign Up
					</Button>
				</Flex>
			</Flex>
			{isOpen ? (
				<Box pb={4} display={{ md: "none" }}>
					<Stack as={"nav"} spacing={4}>
						{links.map((link) => (
							<NavLink key={link.linkName} path={link.path}>
								{link.linkName}
							</NavLink>
						))}
						<NavLink key={"sign up"} path={"/registration"}>
							Sign Up
						</NavLink>
					</Stack>
				</Box>
			) : null}
		</Box>
	);
};

export default Navbar;
