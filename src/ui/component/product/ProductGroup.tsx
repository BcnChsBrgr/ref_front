import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
    productGroup: any[];
}

export default function ProductGroup({ productGroup }: Props) {
    const [product, setProduct] = useState(productGroup.at(0));
    console.log(product);
    return (
        <a href={`/product/${product.pid}/99`}>
            <Card variant="outlined" sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={product.image_url}
                    title={product.name}
                />
                <CardContent>
                    {productGroup.map((productItem, index) => {
                        return (
                            <span
                                key={index}
                                style={{
                                    height: 25,
                                    width: 25,
                                    display: "inline-block",
                                    borderRadius: "50%",
                                    backgroundColor: productItem.colour,
                                }}
                                onMouseOver={() => setProduct(productItem)}
                            ></span>
                        );
                    })}
                    <Typography gutterBottom variant="h6" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $ {product.price}
                    </Typography>
                </CardContent>
            </Card>
        </a>
    );
}
