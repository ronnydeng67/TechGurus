json.extract! @cart, :id, :user_id, :item_id, :quantity

# debugger
json.price @cart.item.price
json.photo_url url_for(@cart.item.photo)
