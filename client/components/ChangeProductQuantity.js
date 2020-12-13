import React, {useState} from 'react'

export default function ChangeProductQuantity({item, updateCart}) {
  const [quatity, setQuantity] = useState(item.productQuantity)

  function onChange(proQuantity, count) {
    setQuantity(proQuantity)

    updateCart({
      id: item.productId,
      quantity: count
    })
  }

  return (
    <div className="cart-item-data">
      <h3>{item.product.name}</h3>

      <p className="add-or-remove-quatity-bttns">
        Qty: {quatity}
        <button
          type="button"
          disabled={item.product.inStock === quatity}
          onClick={() => onChange(quatity + 1, 1)}
          id="plus-sign"
        />
        <button
          type="button"
          id="minus-sign"
          disabled={quatity < 1}
          onClick={() => onChange(quatity - 1, -1)}
        />
      </p>

      <p>
        Price: ${(item.savedPrice / 100 * quatity).toFixed(2)} (${item.savedPrice /
          100}/item)
      </p>
    </div>
  )
}
