import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi=createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints:(b)=>({
        getAllProducts:b.query({
            query:()=>"products"
        }),
        getProductByProductId:b.query({
            query:productId=>(
                {
                    url:  `products/`+productId
                }
            )
          
        })
    })
})

export const {useGetAllProductsQuery,useGetProductByProductIdQuery}=productsApi