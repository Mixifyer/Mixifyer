import React, {useState} from 'react'

export default function ChangeProductQuantity({item, updateCart}) {
  const [quatity, setQuantity] = useState(item.productQuantity)

  function onChange(proQuantity, count) {
    setQuantity(proQuantity)
    console.log('changeCart>>>', item)
    updateCart({
      id: item.productId,
      quantity: count
    })
  }

  return (
    <div>
      <p className="add-or-remove-quatity-bttns">
        <div>
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
        </div>
        <img
          src="remove-img.png"
          id="delete-item"
          onClick={() => onChange(item.productId)}
        />
      </p>

      <p>
        Price: ${(item.savedPrice / 100 * quatity).toFixed(2)} (${item.savedPrice /
          100}/item)
      </p>
    </div>
  )
}
