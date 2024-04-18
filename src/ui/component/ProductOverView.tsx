import ProductGroup from "./product/ProductGroup";
import Box, { BoxProps } from "@mui/material/Box";
interface Props {
    products: any[];
}
export default function ProductOverView({ products }: Props) {
    console.log("Product", products);
    const groupProductByItemId: object = products.reduce((group, product) => {
        const { item } = product;
        group[item] = group[item] ?? [];
        group[item].push(product);
        return group;
    }, {});
    const keyNames = Object.keys(groupProductByItemId);

    return (
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {keyNames.map((keyName, index) => {
                return (
                    <Item key={index}>
                        <ProductGroup
                            productGroup={groupProductByItemId[keyName]}
                        />
                    </Item>
                );
            })}
        </Box>
    );
}

function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#101010" : "#fff",
                color: (theme) =>
                    theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                border: "1px solid",
                borderColor: (theme) =>
                    theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                p: 1,
                m: 1,
                borderRadius: 2,
                fontSize: "0.875rem",
                fontWeight: "700",
                ...sx,
            }}
            {...other}
        />
    );
}
