@carts.each do |cart|
    json.set! cart.id do
        json.extract! cart, :id, :item_id, :user_id, :quantity
        json.photo_url url_for(cart.item.photo)
        json.price cart.item.price
    end
end