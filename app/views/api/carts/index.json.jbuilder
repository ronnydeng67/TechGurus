@carts.each do |cart|
    json.set! cart.id do
        json.extract! cart, :item_id, :user_id, :quantity
        json.extract! cart.item, :name, :price
        json.photo_url url_for(cart.item.photo)
    end
end