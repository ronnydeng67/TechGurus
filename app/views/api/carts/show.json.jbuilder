json.extract! @cart, :id, :user_id, :item_id, :quantity
json.photo_url url_for(@cart.item.photo)
