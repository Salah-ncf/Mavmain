import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const ProductComponent = ({ user }) => {
  const [result, setResult] = useState(null)
  const id = user._id

  useEffect(() => {
    const getFavorite = async (id) => {
      try {
        const Products = await axios.get(
          `https://mavback-p9lg.onrender.com/api/myProducts/${id}`
        )

        console.log(Products.data.MyProducts)
        setResult(Products.data.MyProducts)
      } catch (error) {}
    }
    getFavorite(id)
  }, [])

  return (
    result && (
      <div className="grid grid-cols-5 m-auto min-w-[80vw]">
        {result.map((element) => {
          return (
            <Card
              id={element._id}
              key={element._id}
              img={element.available[0].path}
              name={element.name}
              price={element.price}
              rated={element.rating}
              isOnSale={element.isOnSale}
            />
          )
        })}
      </div>
    )
  )
}

export default ProductComponent
