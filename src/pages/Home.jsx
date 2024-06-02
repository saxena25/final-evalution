import axios from 'axios';
import { useState, useEffect } from 'react';
import { Grid, GridItem, Img, Heading, Box, HStack} from '@chakra-ui/react';

export default function Home(){
    const [data, setData] = useState([])
    const [sortOrderValue, setSortOderValue] = useState('');
    const [filterValue, setFilterValue] = useState("");

    async function fetchData(sortOrderValue, filterValue){
        try {
            let queryParams = {}
            if(filterValue){
                queryParams.status = filterValue;
            }

            if(sortOrderValue){
                queryParams._sort = 'price';
                queryParams._order = sortOrderValue;
            }

            let res = await axios ({
                method: 'get',
                url: 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products',
                params: queryParams,
            })
            // console.log(res?.data?.data);
            setData(res?.data?.data);
        } catch (error) {
            console.log(Error, 'in Fetching Data')
        }
    }

    useEffect(() => {
        fetchData(sortOrderValue, filterValue)
    }, [filterValue, sortOrderValue]);

    return(
        <>
            <Box>
                <HStack>
                    <select name="" id="" placeholder='Sort by Price' value={sortOrderValue} onChange={(e)=>setSortOderValue(e.target.value)}>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>

                    <select name="" id="" placeholder='Filter by Category' value={filterValue} onChange={(e)=>setFilterValue(e.target.value)}>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                        <option value="home decor">Home Decor</option>
                    </select>
                </HStack>
                <Heading mt="5" size="xl">Products</Heading>
                    <Grid templateColumns='repeat(3, 1fr)' gap={2}>
                        {data?.map((product)=>(
                            <GridItem key={product.id}>
                                <Img src={product.image} />
                                <Heading as='h2' size='md'>{product.title}</Heading>
                                <Heading as='h3' size='md'>{product.price}</Heading>
                            </GridItem>
                        ))}
                    </Grid>
            </Box>
        </>
    )
}